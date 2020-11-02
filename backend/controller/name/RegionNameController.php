<?php

namespace controller\name;

use controller\name\common\ControllerName;
use model\name\RegionNameModel;
use validator\name\RegionNameValidator;
use querySearch\name\RegionNameQuerySearch;

class RegionNameController extends ControllerName
{
    public function __construct()
    {
        parent::__construct([
            RegionNameModel::instance(),
            RegionNameValidator::instance(),
            RegionNameQuerySearch::instance()
        ]);
    }
    public static function route()
    {
        return 'name/region';
    }
}