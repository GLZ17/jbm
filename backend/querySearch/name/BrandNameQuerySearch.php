<?php


namespace querySearch\name;

use querySearch\name\common\QuerySearchName;
use model\name\ BrandNameModel;

class BrandNameQuerySearch extends QuerySearchName
{
    public function __construct()
    {
        parent::__construct(BrandNameModel::instance());
    }
}
