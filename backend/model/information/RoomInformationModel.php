<?php


namespace model\information;

use model\common\BaseModel;

class RoomInformationModel extends BaseModel
{
    protected static $nameTableName = 'jbm_information_room';
    protected static $nameCreateTime = 'jbm_information_room_create_time';
    protected static $nameId = 'jbm_information_room_id';
    protected static $nameProductId = 'jbm_information_product_id';
    protected static $nameRoomId = 'jbm_layer_room_id';
    protected static $nameProcessId = 'jbm_name_process_id';

    public function productId()
    {
        return static::$nameProductId;
    }

    public function roomId()
    {
        return static::$nameRoomId;
    }

    public function processId()
    {
        return static::$nameProcessId;
    }
}