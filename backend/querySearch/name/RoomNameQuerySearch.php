<?php


namespace querySearch\name;

use querySearch\name\common\QuerySearchName;
use model\name\RoomNameModel;

class RoomNameQuerySearch extends QuerySearchName
{
    public function __construct()
    {
        parent::__construct(RoomNameModel::instance());
    }
}