<?php


namespace controller\name;

use controller\name\common\ControllerName;
use model\name\ProductNameModel;
use validator\name\ProductNameValidator;
use querySearch\name\ProductNameQuerySearch;

class ProductNameController extends ControllerName
{
    public function __construct()
    {
        parent::__construct([
            ProductNameModel::instance(),
            ProductNameValidator::instance(),
            ProductNameQuerySearch::instance()
        ]);
    }
    public static function route()
    {
        return 'name/product';
    }
}
