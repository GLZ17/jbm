import ProductNamePage from "./ProductNamePage";
import ProductNameForm from "./ProductNameForm";
import ProductNameApi from "./ProductNameApi";
import ProductNameConfig from "./ProductNameConfig";
import PageNameManage from "../common/PageNameManage";

const ProductNamePageManage = PageNameManage(
    ProductNamePage,
    ProductNameForm,
    ProductNameConfig,
    ProductNameApi
);

export default ProductNamePageManage;
