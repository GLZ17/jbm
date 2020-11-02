<?php


namespace querySearch\layer;

use querySearch\layer\common\QuerySearchLayer;
use model\name\RegionNameModel;
use model\name\DeveloperNameModel;

class DeveloperLayerQuerySearch extends QuerySearchLayer
{
    public function __construct()
    {
        parent::__construct([
            RegionNameModel::instance(),
            DeveloperNameModel::instance()
        ]);
    }
}