<?php


namespace controller\name;

use controller\name\common\ControllerName;
use model\name\BrandNameModel;
use validator\name\BrandNameValidator;
use querySearch\name\BrandNameQuerySearch;

class BrandNameController extends ControllerName
{
    public function __construct()
    {
        parent::__construct([
            BrandNameModel::instance(),
            BrandNameValidator::instance(),
            BrandNameQuerySearch::instance()
        ]);
    }

    public static function route()
    {
        return 'name/brand';
    }
}