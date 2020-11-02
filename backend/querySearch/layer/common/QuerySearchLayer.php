<?php


namespace querySearch\layer\common;

use querySearch\common\BaseQuerySearch;

class QuerySearchLayer extends BaseQuerySearch
{
    protected $modelList;

    public function __construct($modelList)
    {
        $this->modelList = $modelList;
    }

    public function search()
    {
        $res = [];
        foreach ($this->modelList as $model) {
            $nameName = $model->name();
            $valueName = $this->extractFromQuerySearch($nameName, '');
            $res[$nameName] = $valueName;
        }
        return $res;
    }
}