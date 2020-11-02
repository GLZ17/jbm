import ProductNamePage from "./ProductNamePage";
import ProductNameConfig from './ProductNameConfig';
import PageNameCheck from "../common/PageNameCheck";

const ProductNamePageCheck = PageNameCheck(
    ProductNamePage,
    ProductNameConfig
);

export default ProductNamePageCheck;