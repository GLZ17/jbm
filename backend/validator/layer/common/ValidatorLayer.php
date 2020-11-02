<?php


namespace validator\layer\common;

use validator\common\BaseValidator;
use model\common\Db;

class ValidatorLayer extends BaseValidator
{
    protected $modelList;

    public function __construct($modelList)
    {
        $this->modelList = $modelList;
    }

    public function validate($values)
    {
        $res = [];
        $resultError = $this->resultError();
        foreach ($this->modelList as $model) {
            $nameId = $model->id();
            $valueId = $this->default($values, $nameId, '');
            if (!$this->isValid($valueId)) {
                return $resultError;
            }
            if (!$this->isExist($model->tableName(), $nameId, $valueId)) {
                return $resultError;
            }
            $res[$nameId] = $valueId;
        }
        return [true, $res];
    }

    private function isValid($value)
    {
        return $this->isRequired($value) && $this->isInteger($value);
    }

    private function isExist($tableName, $nameId, $valueId)
    {
        $query = Db::table($tableName)
            ->andWhere($nameId, '=', $valueId)
            ->select(true);
        return !empty($query);
    }
}