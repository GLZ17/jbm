<?php


namespace validator\name;

use validator\name\common\ValidatorName;
use model\name\BuildingNameModel;

class BuildingNameValidatorName extends ValidatorName
{
    public function __construct()
    {
        parent::__construct(BuildingNameModel::instance());
    }
}