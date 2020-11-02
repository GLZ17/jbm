import ProductNameApi from "./ProductNameApi";
import ProductNameConfig from './ProductNameConfig';
import PageName from "../common/PageName";

const ProductNamePage = PageName(
    ProductNameConfig,
    ProductNameApi
);
export default ProductNamePage;