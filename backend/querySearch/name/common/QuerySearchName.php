<?php

namespace querySearch\name\common;

use querySearch\common\BaseQuerySearch;

class QuerySearchName extends BaseQuerySearch
{
    protected $model;

    public function __construct($model)
    {
        $this->model = $model;
    }

    public function search()
    {
        $nameName = $this->model->name();
        $valueName = $this->extractFromQuerySearch($nameName, '');
        return [[$nameName, $valueName]];
    }
}