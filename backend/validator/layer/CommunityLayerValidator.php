<?php


namespace validator\layer;

use validator\layer\common\ValidatorLayer;

use model\layer\DeveloperLayerModel;
use model\name\CommunityNameModel;

class CommunityLayerValidator extends ValidatorLayer
{
    public function __construct()
    {
        parent::__construct([
            DeveloperLayerModel::instance(),
            CommunityNameModel::instance()
        ]);
    }
}