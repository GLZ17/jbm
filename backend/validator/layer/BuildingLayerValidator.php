<?php


namespace validator\layer;

use validator\layer\common\ValidatorLayer;
use model\name\BuildingNameModel;
use model\layer\CommunityLayerModel;

class BuildingLayerValidator extends ValidatorLayer
{
    public function __construct()
    {
        parent::__construct([
            CommunityLayerModel::instance(),
            BuildingNameModel::instance()
        ]);
    }
}