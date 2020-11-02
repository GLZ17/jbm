<?php


namespace querySearch\name;

use querySearch\name\common\QuerySearchName;
use model\name\ProcessNameModel;

class ProcessNameQuerySearch extends QuerySearchName
{
    public function __construct()
    {
        parent::__construct(ProcessNameModel::instance());
    }
}
