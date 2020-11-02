<?php


namespace validator\name;

use validator\name\common\ValidatorName;
use model\name\RoomNameModel;

class RoomNameValidator extends ValidatorName
{
    public function __construct()
    {
        parent::__construct(RoomNameModel::instance());
    }
}