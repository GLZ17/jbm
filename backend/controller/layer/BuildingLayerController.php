<?php


namespace controller\layer;

use controller\layer\common\ComplexLayerController;
use model\layer\BuildingLayerModel;
use querySearch\layer\BuildingLayerQuerySearch;
use validator\layer\BuildingLayerValidator;
use model\name\BuildingNameModel;
use model\layer\CommunityLayerModel;
use model\common\Db;

class BuildingLayerController extends ComplexLayerController
{
    public function __construct()
    {
        parent::__construct(
            [
                BuildingLayerModel::instance(),
                BuildingLayerValidator::instance(),
                BuildingLayerQuerySearch::instance(),
            ],
            CommunityLayerController::instance()
        );
    }

    protected function title()
    {
        return '楼栋(单元)';
    }

    public static function route()
    {
        return 'layer/building';
    }

    public function modelListOfUniqueValidate()
    {
        return [
            CommunityLayerModel::instance(),
            BuildingNameModel::instance()
        ];
    }

    protected function appendWhereOfIndex(Db $db)
    {
        $idInfoList = $this->idInfoList([$this->modelListOfUniqueValidate()[1]]);
        $idInfo = $this->controller->idInfo();
        array_push($idInfoList, $idInfo);
        $this->appendInfoList($db, $idInfoList);
    }
}