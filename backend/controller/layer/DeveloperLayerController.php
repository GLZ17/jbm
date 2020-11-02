<?php


namespace controller\layer;

use controller\layer\common\SimpleLayerController;
use model\layer\DeveloperLayerModel;
use querySearch\layer\DeveloperLayerQuerySearch;
use validator\layer\DeveloperLayerValidator;
use model\name\DeveloperNameModel;
use model\name\RegionNameModel;
use model\common\Db;

class DeveloperLayerController extends SimpleLayerController
{
    public function __construct()
    {
        parent::__construct(
            [
                DeveloperLayerModel::instance(),
                DeveloperLayerValidator::instance(),
                DeveloperLayerQuerySearch::instance(),
            ]);
    }

    public static function route()
    {
        return 'layer/developer';
    }

    protected function title()
    {
        return '开发商';
    }

    public function modelListOfUniqueValidate()
    {
        return [
            RegionNameModel::instance(),
            DeveloperNameModel::instance()
        ];
    }

    protected function appendWhereOfIndex(Db $db)
    {
        $idInfoList = $this->idInfoList($this->modelListOfUniqueValidate());
        $this->appendInfoList($db, $idInfoList);
    }
}