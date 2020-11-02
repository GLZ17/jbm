<?php


namespace validator\name;

use validator\name\common\ValidatorName;
use model\name\ProductNameModel;

class ProductNameValidator extends ValidatorName
{
    public function __construct()
    {
        parent::__construct(ProductNameModel::instance());
    }
}