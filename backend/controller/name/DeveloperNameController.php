<?php


namespace controller\name;

use controller\name\common\ControllerName;
use model\name\DeveloperNameModel;
use validator\name\DeveloperNameValidator;
use querySearch\name\DeveloperNameQuerySearch;

class DeveloperNameController extends ControllerName
{
    public function __construct()
    {
        parent::__construct([
            DeveloperNameModel::instance(),
            DeveloperNameValidator::instance(),
            DeveloperNameQuerySearch::instance()
        ]);
    }
    public static function route()
    {
        return 'name/developer';
    }
}