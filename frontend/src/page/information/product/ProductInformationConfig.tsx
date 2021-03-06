import ConfigRoute from "../../../route/ConfigRoute";
import BrandNameConfig from "../../name/brand/BrandNameConfig";
import ProductNameConfig from "../../name/product/ProductNameConfig";
import {ISearchItem} from "../../common/PageInit";
import {IPageFormConfig} from "../../common/PageForm";

const ProductInformationConfig = {
    config: (): IPageFormConfig => {
        const configList = [
            BrandNameConfig,
            ProductNameConfig
        ].map(it => it.config());
        return {
            fieldList: [
                "jbm_information_product_id",
                ...configList.map(it => it.fieldList).map(it => it[0]),
                "jbm_information_product_create_time"
            ],
            title: ConfigRoute.product_information.name,
            headerList: [
                'id',
                ...configList.map(it => it.headerList).map(it => it[1]),
                '创建时间'
            ]
        }
    },
    searchList: (): ISearchItem[] => {
        return [
            BrandNameConfig,
            ProductNameConfig
        ].map(it => it.searchList()).map(it => it[0]);
    }
}

export default ProductInformationConfig;

