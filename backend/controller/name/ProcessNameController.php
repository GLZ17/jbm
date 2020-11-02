<?php


namespace controller\name;

use controller\name\common\ControllerName;
use model\name\ProcessNameModel;
use validator\name\ProcessNameValidator;
use querySearch\name\ProcessNameQuerySearch;

class ProcessNameController extends ControllerName
{
    public function __construct()
    {
        parent::__construct([
            ProcessNameModel::instance(),
            ProcessNameValidator::instance(),
            ProcessNameQuerySearch::instance()
        ]);
    }
    public static function route()
    {
        return 'name/process';
    }
}
