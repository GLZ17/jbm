<?php


namespace controller\layer;

use controller\layer\common\ComplexLayerController;
use model\layer\CommunityLayerModel;
use querySearch\layer\CommunityLayerQuerySearch;
use validator\layer\CommunityLayerValidator;
use model\name\CommunityNameModel;
use model\layer\DeveloperLayerModel;
use model\common\Db;

class CommunityLayerController extends ComplexLayerController
{
    public function __construct()
    {
        parent::__construct(
            [
                CommunityLayerModel::instance(),
                CommunityLayerValidator::instance(),
                CommunityLayerQuerySearch::instance(),
            ],
            DeveloperLayerController::instance()
        );
    }

    protected function title()
    {
        return '小区';
    }

    public static function route()
    {
        return 'layer/community';
    }

    public function modelListOfUniqueValidate()
    {
        return [
            DeveloperLayerModel::instance(),
            CommunityNameModel::instance()
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