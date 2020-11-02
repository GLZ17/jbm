<?php


namespace validator\layer;

use validator\layer\common\ValidatorLayer;
use model\name\RoomNameModel;
use model\layer\BuildingLayerModel;

class RoomLayerValidator extends ValidatorLayer
{
    public function __construct()
    {
        parent::__construct([
            BuildingLayerModel::instance(),
            RoomNameModel::instance()
        ]);
    }
}