<?php


namespace model\layer;

use model\common\BaseModel;

class CommunityLayerModel extends BaseModel
{
    protected static $nameTableName = 'jbm_layer_community';
    protected static $nameCreateTime = 'jbm_layer_community_create_time';
    protected static $nameId = 'jbm_layer_community_id';
    protected static $nameDeveloperId = 'jbm_layer_developer_id';
    protected static $nameCommunityId = 'jbm_name_community_id';

    public function developerId()
    {
        return static::$nameDeveloperId;
    }

    public function communityId()
    {
        return static::$nameCommunityId;
    }
}