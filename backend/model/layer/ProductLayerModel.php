<?php


namespace model\layer;

use model\common\BaseModel;

class ProductLayerModel extends BaseModel
{
    protected static $nameTableName = 'jbm_layer_product';
    protected static $nameCreateTime = 'jbm_layer_product_create_time';
    protected static $nameId = 'jbm_layer_product_id';
    protected static $nameProductId = 'jbm_name_product_id';
    protected static $nameBrandId = 'jbm_name_brand_id';

    public function brandId()
    {
        return static::$nameBrandId;
    }

    public function productId()
    {
        return static::$nameProductId;
    }
}