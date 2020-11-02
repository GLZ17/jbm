<?php


namespace controller\information;

use model\common\Db;
use controller\information\common\ControllerInformation;
use model\information\ProductInformationModel;
use validator\information\ProductInformationValidator;
use querySearch\information\ProductInformationQuerySearch;
use controller\layer\ProductLayerController;
use model\layer\ProductLayerModel;

class ProductInformationController extends ControllerInformation
{
    public function __construct()
    {
        parent::__construct(
            [
                ProductInformationModel::instance(),
                ProductInformationValidator::instance(),
                ProductInformationQuerySearch::instance(),
            ],
            ProductLayerController::instance()
        );
    }

    public static function route()
    {
        return 'information/product';
    }

    protected function title()
    {
        return '产品';
    }

    public function modelListOfUniqueValidate()
    {
        return [ProductLayerModel::instance()];
    }

    protected function appendWhereOfIndex(Db $db)
    {
        $idInfoList = $this->idInfoList([$this->modelListOfUniqueValidate()[1]]);
        $idInfo = $this->controller->idInfo();
        array_push($idInfoList, $idInfo);
        $this->appendInfoList($db, $idInfoList);
    }
}