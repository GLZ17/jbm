<?php


namespace validator\information;

use validator\information\common\ValidatorInformation;
use model\layer\ProductLayerModel;

class ProductInformationValidator extends ValidatorInformation
{
    public function __construct()
    {
        parent::__construct([
            ProductLayerModel::instance()
        ]);
    }
}