import ProductLayerPage from "./ProductLayerPage";
import ProductLayerApi from "./ProductLayerApi";
import ProductLayerForm from "./ProductLayerForm";
import ProductLayerConfig from "./ProductLayerConfig";
import {
    withPageManage,
    withSearchBarWithAdd,
    withButtonEditRemove
} from "../../common/PageManage";

const SearchBar = withSearchBarWithAdd(
    ProductLayerForm,
    ProductLayerConfig.searchList()
);
const Button = withButtonEditRemove(
    ProductLayerForm,
    ProductLayerApi,
    ProductLayerConfig.config().fieldList
);

const ProductLayerPageManage = withPageManage(
    ProductLayerPage,
    SearchBar,
    Button,
);

export default ProductLayerPageManage;
