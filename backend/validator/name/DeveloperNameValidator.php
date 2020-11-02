<?php


namespace validator\name;

use validator\name\common\ValidatorName;
use model\name\DeveloperNameModel;

class DeveloperNameValidator extends ValidatorName
{
    public function __construct()
    {
        parent::__construct(DeveloperNameModel::instance());
    }
}