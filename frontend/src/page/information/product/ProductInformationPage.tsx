import BuildingInformationApi from './ProductInformationApi';
import ProductInformationConfig from './ProductInformationConfig';
import {withPage} from "../../common/PagePage";

const ProductInformationPage = withPage(
    ProductInformationConfig.searchList(),
    ProductInformationConfig.config(),
    BuildingInformationApi,
);

export default ProductInformationPage;