<?php


namespace model\layer;

use model\common\BaseModel;

class DeveloperLayerModel extends BaseModel
{
    protected static $nameTableName = 'jbm_layer_developer';
    protected static $nameCreateTime = 'jbm_layer_developer_create_time';
    protected static $nameId = 'jbm_layer_developer_id';
    protected static $nameRegionId = 'jbm_name_region_id';
    protected static $nameDeveloperId = 'jbm_name_developer_id';

    public function regionId()
    {
        return static::$nameRegionId;
    }

    public function developerId()
    {
        return static::$nameDeveloperId;
    }
}