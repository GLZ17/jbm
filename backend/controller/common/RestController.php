<?php


namespace controller\common;

use model\common\Db;

abstract class RestController extends BaseController
{
    protected $namePrevIndex = 'prevIndex';
    protected $nameNextIndex = 'nextIndex';
    protected $nameIndexList = 'indexList';
    protected $nameLastIndex = 'lastIndex';
    protected $nameTotal = 'total';
    protected $nameDataList = 'dataList';
    protected $nameRelative = 'relative';

    protected $model;
    protected $validator;
    protected $querySearch;

    abstract public static function route();

    abstract protected function uniqueValidate($hasId);

    abstract protected function appendWhereOfIndex(Db $db);

    public function __construct($modelList)
    {
        parent::__construct();
        list($model, $validator, $querySearch) = $modelList;
        $this->model = $model;
        $this->validator = $validator;
        $this->querySearch = $querySearch;
    }

    public function insert()
    {
        list($status, $data) = $this->uniqueValidate(false);
        if (!$status) {
            return $this->response($status, $data, '');
        }
        $res = Db::table($this->tableName())->insert($data);
        return $this->result(!!$res, $res);
    }

    public function update()
    {
        list($status, $data) = $this->uniqueValidate(true);
        if (!$status) {
            return $this->response($status, $data, '');
        }
        $res = Db::table($this->tableName())
            ->andWhere($this->model->id(), '=', $this->id())
            ->update($data);
        return $this->result(!!$res, $res);
    }

    protected function total()
    {
        $nameId = $this->model->id();
        $nameTotal = 'total';
        $db = Db::table($this->tableName())->field('count(' . $nameId . ') as ' . $nameTotal);
        $this->appendWhereOfIndex($db);
        return +$db->select(true)[$nameTotal];
    }

    public function index()
    {
        $data = $this->initPageData($this->total());
        $db = Db::table($this->tableName());
        $this->appendWhereOfIndex($db);
        $pageIndex = $data[$this->querySearch->namePageIndex()];
        $pageSize = $data[$this->querySearch->namePageSize()];
        $data[$this->nameDataList] = $db->limit($pageIndex, $pageSize)
            ->order($this->model->id(), false)
            ->select();
        $data[$this->nameRelative] = [];
        return [true, $this->message->get(), $data];
    }

    protected function tableName()
    {
        return $this->model->tableName();
    }

    protected function id()
    {
        $uris = explode('/', explode('?', $_SERVER['REQUEST_URI'])[0]);
        return array_pop($uris);
    }

    final protected function appendAndWheresLike(Db $db, $andWheres)
    {
        foreach ($andWheres as $item) {
            list($name, $value) = $item;
            if (mb_strlen($value) > 0) {
                $db->andWhere($name, 'like', '%' . $value . '%');
            }
        }
    }

    protected function validate()
    {
        list($status, $data) = $this->validator->validate($this->data());
        if (!$status) {
            $data = $this->message->data();
        }
        return $this->pair($status, $data);
    }

    public function delete()
    {
        return $this->response(false, '删除模块还在开发中,很多关联表的内容需要考虑', '');
//        $res = Db::table(static::$table_name)
//            ->andWhere(mDeveloper::$nameId, '=', $this->id())
//            ->update([mDeveloper::$nameStatus => mDeveloper::$statusHide]);
//        return $this->result(!!$res, $res);
    }

    protected function initPageData($total)
    {
        list($namePageNumber, $valuePageNumber) = $this->querySearch->pageNumber();
        list($namePageIndex, $valuePageIndex) = $this->querySearch->pageIndex();
        list($namePageSize, $valuePageSize) = $this->querySearch->pageSize();
        $firstIndex = 1;
        $data = [
            $this->nameTotal => $total,
            $this->namePrevIndex => $firstIndex,
            $this->nameNextIndex => $firstIndex,
            $this->nameLastIndex => $firstIndex,
            $this->nameIndexList => [$firstIndex],
            $namePageIndex => $firstIndex,
            $namePageSize => $valuePageSize,
            $namePageNumber => $valuePageNumber,
        ];
        if ($total < $valuePageSize) {
            return $data;
        }
        $pages = ceil($total / $valuePageSize);
        if ($valuePageIndex > $pages) {
            $valuePageIndex = $pages;
        }
        $num = floor(($valuePageNumber + 1) / 2);
        $res = [];
        if ($valuePageIndex + $num >= $pages) {
            for ($i = 0; $i < $valuePageNumber; ++$i) {
                $index = $pages - $i;
                if ($index >= $firstIndex) {
                    $res[] = $index;
                }
            }
            $res = array_reverse($res);
        } else if ($valuePageIndex - $num <= $firstIndex) {
            for ($i = 0; $i < $valuePageNumber; ++$i) {
                $index = $firstIndex + $i;
                if ($index <= $pages) {
                    $res[] = $index;
                }
            }
        } else {
            $start = $valuePageIndex - $num;
            for ($i = 0; $i < $valuePageNumber; ++$i) {
                $index = $start + $i;
                if ($index <= $pages) {
                    $res[] = $index;
                }
            }
        }
        $data[$this->nameIndexList] = $res;
        $data[$this->nameLastIndex] = $pages;
        $data[$this->namePrevIndex] = max($firstIndex, $valuePageIndex - 1);
        $data[$this->nameNextIndex] = min($pages, $valuePageIndex + 1);
        $data[$namePageIndex] = $valuePageIndex;
        return $data;
    }
}