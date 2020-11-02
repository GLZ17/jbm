<?php


namespace querySearch\name;

use querySearch\name\common\QuerySearchName;
use model\name\BuildingNameModel;

class BuildingNameQuerySearch extends QuerySearchName
{
    public function __construct()
    {
        parent::__construct(BuildingNameModel::instance());
    }
}