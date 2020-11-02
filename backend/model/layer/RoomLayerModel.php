<?php


namespace model\layer;

use model\common\BaseModel;

class RoomLayerModel extends BaseModel
{
    protected static $nameTableName = 'jbm_layer_room';
    protected static $nameCreateTime = 'jbm_layer_room_create_time';
    protected static $nameId = 'jbm_layer_room_id';
    protected static $nameBuildingId = 'zbm_layer_building_id';
    protected static $nameRoomId = 'zbm_name_room_id';

    public function buildingId()
    {
        return static::$nameBuildingId;
    }

    public function roomId()
    {
        return static::$nameRoomId;
    }
}