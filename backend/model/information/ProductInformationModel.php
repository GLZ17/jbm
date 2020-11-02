<?php


namespace model\information;

use model\common\BaseModel;

class ProductInformationModel extends BaseModel
{
    protected static $nameTableName = 'jbm_information_product';
    protected static $nameCreateTime = 'jbm_information_product_create_time';
    protected static $nameId = 'jbm_information_product_id';
    protected static $nameProductId = 'jbm_layer_product_id';

    public function productId()
    {
        return static::$nameProductId;
    }
}