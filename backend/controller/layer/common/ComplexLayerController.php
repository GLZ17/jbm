<?php


namespace controller\layer\common;

abstract class ComplexLayerController extends ControllerLayer
{
    protected $controller;

    public function __construct($modelList, $controller)
    {
        parent::__construct($modelList);
        $this->controller = $controller;
    }

    protected function composerDataList($relativeModel, &$modelList, &$dataList, &$relative)
    {
        $field = $relativeModel->id();
        $nameValues = $this->nameValues;
        foreach ($modelList as $model) {
            $nameId = $model->id();
            foreach ($dataList as &$item) {
                $value = $item[$field];
                $it = $relative[$field][$nameValues][$value];
                $item[$nameId] = $it[$nameId];
            }
        }
    }

    public function composerData(&$dataList, &$relative)
    {
        $modelList = $this->modelListOfUniqueValidate();
        $this->composerRelative($modelList, $dataList, $relative);
        $relativeModel = $modelList[0];
        $modelList = $this->controller->modelListOfUniqueValidate();
        $this->composerDataList($relativeModel, $modelList, $dataList, $relative);
        $this->controller->composerData($dataList, $relative);
    }

    public function idInfo()
    {
        $idInfoList = $this->idInfoList([$this->modelListOfUniqueValidate()[1]]);
        $idInfo = $this->controller->idInfo();
        array_push($idInfoList, $idInfo);
        return $this->initIdInfo($idInfoList);
    }
}