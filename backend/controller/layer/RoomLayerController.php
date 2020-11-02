<?php


namespace controller\layer;


use controller\layer\common\ComplexLayerController;
use model\layer\RoomLayerModel;
use querySearch\layer\RoomLayerQuerySearch;
use validator\layer\RoomLayerValidator;
use model\name\RoomNameModel;
use model\layer\BuildingLayerModel;
use model\common\Db;

class RoomLayerController extends ComplexLayerController
{
    public function __construct()
    {
        parent::__construct(
            [
                RoomLayerModel::instance(),
                RoomLayerValidator::instance(),
                RoomLayerQuerySearch::instance(),
            ],
            BuildingLayerController::instance()
        );
    }

    protected function title()
    {
        return '房间';
    }

    public static function route()
    {
        return 'layer/room';
    }

    public function modelListOfUniqueValidate()
    {
        return [
            BuildingLayerModel::instance(),
            RoomNameModel::instance()
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