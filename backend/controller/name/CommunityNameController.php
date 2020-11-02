<?php


namespace controller\name;

use controller\name\common\ControllerName;
use model\name\CommunityNameModel;
use validator\name\CommunityNameValidator;
use querySearch\name\CommunityNameQuerySearch;

class CommunityNameController extends ControllerName
{
    public function __construct()
    {
        parent::__construct([
            CommunityNameModel::instance(),
            CommunityNameValidator::instance(),
            CommunityNameQuerySearch::instance()
        ]);
    }
    public static function route()
    {
        return 'name/community';
    }
}