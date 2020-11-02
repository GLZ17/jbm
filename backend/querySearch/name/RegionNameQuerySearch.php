<?php


namespace querySearch\name;

use querySearch\name\common\QuerySearchName;
use model\name\RegionNameModel;

class RegionNameQuerySearch extends QuerySearchName
{
    public function __construct()
    {
        parent::__construct(RegionNameModel::instance());
    }
}