<?php


namespace controller\name;

use controller\name\common\ControllerName;
use model\name\BuildingNameModel;
use validator\name\BuildingNameValidatorName;
use querySearch\name\BuildingNameQuerySearch;

class BuildingNameController extends ControllerName
{
    public function __construct()
    {
        parent::__construct([
            BuildingNameModel::instance(),
            BuildingNameValidatorName::instance(),
            BuildingNameQuerySearch::instance()
        ]);
    }
    public static function route()
    {
        return 'name/building';
    }
}