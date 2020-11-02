<?php


namespace common;


class Instance
{
    final public static function instance()
    {
        return new static();
    }
}