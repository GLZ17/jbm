<?php


namespace common;


class Message
{
    private $status = [
        false => '失败',
        true => '成功'
    ];

    public static function instance()
    {
        return new static();
    }


    protected function join($prefix, $status)
    {
        return $prefix . $this->status[$status];
    }

    public function get($status = true)
    {
        return $this->join('获取', $status);
    }

    public function put($status = true)
    {
        return $this->join('更新', $status);
    }

    public function post($status = true)
    {
        return $this->join('添加', $status);
    }

    public function delete($status = true)
    {
        return $this->join('删除', $status);
    }

    public function data()
    {
        return '参数错误';
    }

    public function duplicate($label)
    {
        return $label . ' 已存在,不能重复';
    }
}