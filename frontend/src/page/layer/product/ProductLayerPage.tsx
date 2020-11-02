import ProductLayerApi from './ProductLayerApi';
import ProductLayerConfig from './ProductLayerConfig';
import {withPage} from "../../common/PagePage";

const ProductLayerPage = withPage(
    ProductLayerConfig.searchList(),
    ProductLayerConfig.config(),
    ProductLayerApi,
);

export default ProductLayerPage;