<?php


namespace querySearch\name;

use querySearch\name\common\QuerySearchName;
use model\name\DeveloperNameModel;

class DeveloperNameQuerySearch extends QuerySearchName
{
    public function __construct()
    {
        parent::__construct(DeveloperNameModel::instance());
    }
}