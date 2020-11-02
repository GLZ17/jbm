<?php


namespace querySearch\layer;

use querySearch\layer\common\QuerySearchLayer;
use model\name\BrandNameModel;
use model\name\ProductNameModel;

class ProductLayerQuerySearch extends QuerySearchLayer
{
    public function __construct()
    {
        parent::__construct([
            BrandNameModel::instance(),
            ProductNameModel::instance()
        ]);
    }
}