<?php


namespace validator\common;

use common\Instance;

abstract class BaseValidator extends Instance
{
    use Len;

    protected function maxLen($value, $maxLen)
    {
        return mb_strlen($value) <= $maxLen;
    }

    protected function isRequired($value)
    {
        return mb_strlen($value) > 0;
    }

    protected function isInteger($value)
    {
        return !!preg_match('/^\d{1,8}$/', $value);
    }

    abstract public function validate($values);

    protected function default(&$values, $field, $default)
    {
        $value = $values[$field] ?? '';
        return $value ? $value : $default;
    }

    protected function resultError()
    {
        return [false, ''];
    }
}