<?php


namespace querySearch\name;

use querySearch\name\common\QuerySearchName;
use model\name\ProductNameModel;

class ProductNameQuerySearch extends QuerySearchName
{
    public function __construct()
    {
        parent::__construct(ProductNameModel::instance());
    }
}