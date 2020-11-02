<?php


namespace model\common;


use common\Instance;


class BaseModel extends Instance
{
    protected static $nameId = '';
    protected static $nameName = '';
    protected static $nameCreateTime = '';
    protected static $nameTableName = '';

    public function id()
    {
        return static::$nameId;
    }

    public function name()
    {
        return static::$nameName;
    }

    public function createTime()
    {
        return static::$nameCreateTime;
    }

    public function tableName()
    {
        return static::$nameTableName;
    }

}