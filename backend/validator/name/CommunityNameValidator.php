<?php


namespace validator\name;

use validator\name\common\ValidatorName;
use model\name\CommunityNameModel;

class CommunityNameValidator extends ValidatorName
{
    public function __construct()
    {
        parent::__construct(CommunityNameModel::instance());
    }
}