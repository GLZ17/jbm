<?php

namespace controller\name\common;

use model\common\Db;
use controller\common\RestController;

abstract class ControllerName extends RestController
{
    protected function uniqueValidate($hasId)
    {
        list ($status, $data) = $this->validate();
        if (!$status) {
            return $this->pair($status, $this->message->data());
        }
        $name = $this->model->name();
        $value = $data[$name];
        $db = Db::table($this->tableName())->andWhere($name, '=', $value);
        if ($hasId) {
            $db->andWhere($this->model->id(), '<>', $this->id());
        }
        $query = $db->select(true);
        if (!empty($query)) {
            $data = $this->message->duplicate($value);
            $status = false;
        }
        return $this->pair($status, $data);
    }
    
    protected function appendWhereOfIndex(Db $db)
    {
        $list = $this->querySearch->search();
        foreach ($list as $item) {
            list($name, $value) = $item;
            if (mb_strlen($value) > 0) {
                $this->appendAndWheresLike($db, [[$name, $value]]);
            }
        }
        return $db;
    }
}