import ProductInformationPage from "./ProductInformationPage";
import BuildingInformationApi from "./ProductInformationApi";
import ProductInformationForm from "./ProductInformationForm";
import ProductInformationConfig from "./ProductInformationConfig";
import {
    withPageManage,
    withSearchBarWithAdd,
    withButtonEditRemove
} from "../../common/PageManage";

const SearchBar = withSearchBarWithAdd(
    ProductInformationForm,
    ProductInformationConfig.searchList()
);
const Button = withButtonEditRemove(
    ProductInformationForm,
    BuildingInformationApi,
    ProductInformationConfig.config().fieldList
);

const ProductInformationPageManage = withPageManage(
    ProductInformationPage,
    SearchBar,
    Button,
);

export default ProductInformationPageManage;
