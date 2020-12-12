import ProductInformationPage from "./ProductInformationPage";
import {withPageCheck, withButtonCheck, withSearchBarWithBack} from "../../common/PageCheck";
import ProductInformationConfig from "./ProductInformationConfig";

const SearchBar = withSearchBarWithBack(ProductInformationConfig.searchList());
const Button = withButtonCheck();

const ProductInformationPageCheck = withPageCheck(
    ProductInformationPage,
    SearchBar,
    Button,
);
export default ProductInformationPageCheck;