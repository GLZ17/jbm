<?php


namespace querySearch\information;

use querySearch\information\common\QuerySearchInformation;
use model\name\BrandNameModel;
use model\name\ProductNameModel;

class ProductInformationQuerySearch extends QuerySearchInformation
{
    public function __construct()
    {
        parent::__construct([
            BrandNameModel::instance(),
            ProductNameModel::instance()
        ]);
    }
}