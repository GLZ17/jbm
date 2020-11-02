<?php


namespace controller\layer\common;

abstract class SimpleLayerController extends ControllerLayer
{
    public function __construct($modelList)
    {
        parent::__construct($modelList);
    }

    public function composerData(&$dataList, &$relative)
    {
        $modelList = $this->modelListOfUniqueValidate();
        $this->composerRelative($modelList, $dataList, $relative);
    }

    public function idInfo()
    {
        $idInfoList = $this->idInfoList($this->modelListOfUniqueValidate());
        return $this->initIdInfo($idInfoList);
    }
}