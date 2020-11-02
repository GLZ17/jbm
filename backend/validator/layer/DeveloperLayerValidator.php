<?php


namespace validator\layer;

use validator\layer\common\ValidatorLayer;

use model\name\RegionNameModel;
use model\name\DeveloperNameModel;

class DeveloperLayerValidator extends ValidatorLayer
{
    public function __construct()
    {
        parent::__construct([
            RegionNameModel::instance(),
            DeveloperNameModel::instance()
        ]);
    }
}