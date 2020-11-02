<?php


namespace validator\name;

use validator\name\common\ValidatorName;
use model\name\RegionNameModel;

class RegionNameValidator extends ValidatorName
{
    public function __construct()
    {
        parent::__construct(RegionNameModel::instance());
    }
}