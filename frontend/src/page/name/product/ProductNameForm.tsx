import ConfigRoute from "../../../route/ConfigRoute";
import ProductNameApi from "./ProductNameApi";
import ProductNameConfig from './ProductNameConfig';
import FormName from "../common/FormName";

const ProductNameForm = FormName(
    ConfigRoute.product_name.name,
    ProductNameConfig.config(),
    ProductNameApi
);

export default ProductNameForm;