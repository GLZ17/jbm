<?php


namespace validator\name;

use validator\name\common\ValidatorName;
use model\name\ProcessNameModel;

class ProcessNameValidator extends ValidatorName
{
    public function __construct()
    {
        parent::__construct(ProcessNameModel::instance());
    }
}