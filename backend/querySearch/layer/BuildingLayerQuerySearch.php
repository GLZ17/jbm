<?php


namespace querySearch\layer;

use querySearch\layer\common\QuerySearchLayer;
use model\name\RegionNameModel;
use model\name\DeveloperNameModel;
use model\name\CommunityNameModel;
use model\name\BuildingNameModel;

class BuildingLayerQuerySearch extends QuerySearchLayer
{
    public function __construct()
    {
        parent::__construct([
            RegionNameModel::instance(),
            DeveloperNameModel::instance(),
            CommunityNameModel::instance(),
            BuildingNameModel::instance()
        ]);
    }
}