<?php


namespace controller\name;

use controller\name\common\ControllerName;
use model\name\RoomNameModel;
use validator\name\RoomNameValidator;
use querySearch\name\RoomNameQuerySearch;

class RoomNameController extends ControllerName
{
    public function __construct()
    {
        parent::__construct([
            RoomNameModel::instance(),
            RoomNameValidator::instance(),
            RoomNameQuerySearch::instance()
        ]);
    }
    public static function route()
    {
        return 'name/room';
    }
}