<?php


namespace validator\layer;

use validator\layer\common\ValidatorLayer;
use model\name\BrandNameModel;
use model\name\ProductNameModel;

class ProductLayerValidator extends ValidatorLayer
{
    public function __construct()
    {
        parent::__construct([
            BrandNameModel::instance(),
            ProductNameModel::instance()
        ]);
    }
}