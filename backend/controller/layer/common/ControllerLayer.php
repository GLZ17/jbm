<?php


namespace controller\layer\common;

use controller\common\RestController;
use model\common\Db;

abstract class ControllerLayer extends RestController
{
    protected $nameField = 'field';
    protected $nameValues = 'values';
    protected $search;

    public function __construct($modelList)
    {
        parent::__construct($modelList);
        $this->search = $this->querySearch->search();
    }

    abstract protected function title();

    abstract public function modelListOfUniqueValidate();

    abstract public function composerData(&$dataList, &$relative);

    protected function uniqueValidateIdExist(&$data)
    {
        $modelList = $this->modelListOfUniqueValidate();
        foreach ($modelList as $model) {
            $nameId = $model->id();
            $valueId = $data[$nameId];
            $tableName = $model->tableName();
            $query = Db::table($tableName)
                ->andWhere($nameId, '=', $valueId)
                ->select(true);
            if (empty($query)) {
                return false;
            }
        }
        return true;
    }

    protected function uniqueValidate($hasId)
    {
        list ($status, $data) = $this->validate();
        $errorResult = $this->pair($status, $this->message->data());
        if (!$status) {
            return $errorResult;
        }
        if (!$this->uniqueValidateIdExist($data)) {
            return $errorResult;
        }
        $db = Db::table($this->tableName());
        if ($hasId) {
            $db->andWhere($this->model->id(), '<>', $this->id());
        }
        foreach ($this->modelListOfUniqueValidate() as $model) {
            $nameId = $model->id();
            $db->andWhere($nameId, '=', $data[$nameId]);
        }
        $query = $db->select(true);
        if (!empty($query)) {
            $data = $this->message->duplicate($this->title());
            $status = false;
        }
        return $this->pair($status, $data);
    }

    protected function initIdList($model, &$dataList)
    {
        $nameId = $model->id();
        $res = [];
        foreach ($dataList as &$item) {
            $res[] = $item[$nameId];
        }
        return $res;
    }

    protected function initRelativeItem($model, &$dataList)
    {
        $nameValues = $this->nameValues;
        $relativeItem = [
            $this->nameField => $model->name(),
            $nameValues => []
        ];
        $idList = $this->initIdList($model, $dataList);
        if (!empty($idList)) {
            $nameId = $model->id();
            $query = Db::table($model->tableName())
                ->andWhere($nameId, 'in', $idList)
                ->select();
            $res = &$relativeItem[$nameValues];
            foreach ($query as &$item) {
                $res[$item[$nameId]] = $item;
            }
        }
        return $relativeItem;
    }

    protected function composerRelative(&$modelList, &$dataList, &$relative)
    {
        foreach ($modelList as $model) {
            $relative[$model->id()] = $this->initRelativeItem($model, $dataList);
        }
    }

    public function index()
    {
        list($status, $message, $data) = parent::index();
        $dataList = &$data[$this->nameDataList];
        $relative = &$data[$this->nameRelative];
        $this->composerData($dataList, $relative);
        return $this->response($status, $message, $data);
    }

    protected function ids($tableName, $nameName, $valueName, $nameId)
    {
        $db = Db::table($tableName);
        $this->appendAndWheresLike($db, [[$nameName, $valueName]]);
        $query = $db->select();
        $ids = [];
        foreach ($query as $item) {
            $ids[] = $item[$nameId];
        }
        return $ids;
    }

    protected function idInfoList($modelList)
    {
        $idInfoList = [];
        foreach ($modelList as $model) {
            $nameName = $model->name();
            $nameId = $model->id();
            $valueName = $this->search[$nameName];
            if (mb_strlen($valueName) > 0) {
                $ids = $this->ids($model->tableName(), $nameName, $valueName, $nameId);
                $data = [true, $nameId, $ids];
            } else {
                $data = [false, $nameId, $valueName];
            }
            $idInfoList[] = $data;
        }
        return $idInfoList;
    }

    protected function appendInfoList(Db $db, $idInfoList)
    {
        foreach ($idInfoList as $idInfo) {
            list($status, $name, $ids) = $idInfo;
            if ($status) {
                if (empty($ids)) {
                    $db->andWhere($name, '=', 0);
                } else {
                    $db->andWhere($name, 'in', $ids);
                }
            }
        }
    }

    protected function isIdInfoListHasRequire(&$idInfoList)
    {
        foreach ($idInfoList as &$idInfo) {
            if ($idInfo[0]) {
                return true;
            }
        }
        return false;
    }

    protected function isIdInfListHasEmpty(&$idInfoList)
    {
        foreach ($idInfoList as &$idInfo) {
            list($status, $ids) = $idInfo;
            if ($status && empty($ids)) {
                return true;
            }
        }
        return false;
    }

    public function idInfoQuery(&$idInfoList, $nameId)
    {
        $db = Db::table($this->tableName());
        foreach ($idInfoList as &$idInfo) {
            list($status, $name, $ids) = $idInfo;
            if ($status) {
                $db->andWhere($name, 'in', $ids);
            }
        }
        $query = $db->select();
        $ids = [];
        foreach ($query as $item) {
            $ids[] = $item[$nameId];
        }
        return [true, $nameId, $ids];
    }

    protected function initIdInfo(&$idInfoList)
    {
        $nameId = $this->model->id();
        if (!$this->isIdInfoListHasRequire($idInfoList)) {
            return [false, $nameId, ''];
        }
        if ($this->isIdInfListHasEmpty($idInfoList)) {
            return [true, $nameId, []];
        }
        return $this->idInfoQuery($idInfoList, $nameId);
    }
}