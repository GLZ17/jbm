<?php


namespace validator\name\common;

use validator\common\BaseValidator;

class ValidatorName extends BaseValidator
{
    protected $model;

    public function __construct($model)
    {
        $this->model = $model;
    }

    public function validate($values)
    {
        $nameName = $this->model->name();
        $val = $this->default($values, $nameName, '');
        if ($this->isRequired($val) && $this->maxLen($val, $this->maxNameLen)) {
            return [true, [$nameName => $val]];
        } else {
            return [false, ''];
        }
    }

    protected function name($value, $maxLen)
    {
        return $this->isRequired($value) &&
            $this->maxLen($value, $maxLen);
    }
}