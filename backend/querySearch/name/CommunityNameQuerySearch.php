<?php


namespace querySearch\name;

use querySearch\name\common\QuerySearchName;
use model\name\CommunityNameModel;

class CommunityNameQuerySearch extends QuerySearchName
{
    public function __construct()
    {
        parent::__construct(CommunityNameModel::instance());
    }
}