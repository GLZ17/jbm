import ProductLayerPage from "./ProductLayerPage";
import {withPageCheck, withButtonCheck, withSearchBarWithBack} from "../../common/PageCheck";
import ProductLayerConfig from "./ProductLayerConfig";

const SearchBar = withSearchBarWithBack(ProductLayerConfig.searchList());
const Button = withButtonCheck();

const ProductLayerPageCheck = withPageCheck(
    ProductLayerPage,
    SearchBar,
    Button,
);
export default ProductLayerPageCheck;