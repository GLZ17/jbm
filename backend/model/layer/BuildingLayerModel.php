<?php


namespace model\layer;

use model\common\BaseModel;

class BuildingLayerModel extends BaseModel
{
    protected static $nameTableName = 'jbm_layer_building';
    protected static $nameCreateTime = 'jbm_layer_building_create_time';
    protected static $nameId = 'jbm_layer_building_id';
    protected static $nameCommunityId = 'jbm_layer_community_id';
    protected static $nameBuildingId = 'jbm_name_building_id';

    public function communityId()
    {
        return static::$nameCommunityId;
    }

    public function buildingId()
    {
        return static::$nameBuildingId;
    }
}