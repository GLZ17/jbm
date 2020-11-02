<?php


namespace validator\name;

use validator\name\common\ValidatorName;
use model\name\BrandNameModel;

class BrandNameValidator extends ValidatorName
{
    public function __construct()
    {
        parent::__construct(BrandNameModel::instance());
    }
}
