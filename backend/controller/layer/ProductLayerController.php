<?php


namespace controller\layer;

use controller\layer\common\SimpleLayerController;
use model\layer\ProductLayerModel;
use querySearch\layer\ProductLayerQuerySearch;
use validator\layer\ProductLayerValidator;
use model\name\ProductNameModel;
use model\name\BrandNameModel;
use model\common\Db;

class ProductLayerController extends SimpleLayerController
{
    public function __construct()
    {
        parent::__construct(
            [
                ProductLayerModel::instance(),
                ProductLayerValidator::instance(),
                ProductLayerQuerySearch::instance(),
            ]);
    }

    public static function route()
    {
        return 'layer/product';
    }

    protected function title()
    {
        return '产品';
    }

    public function modelListOfUniqueValidate()
    {
        return [
            BrandNameModel::instance(),
            ProductNameModel::instance()
        ];
    }

    protected function appendWhereOfIndex(Db $db)
    {
        $idInfoList = $this->idInfoList($this->modelListOfUniqueValidate());
        $this->appendInfoList($db, $idInfoList);
    }
}