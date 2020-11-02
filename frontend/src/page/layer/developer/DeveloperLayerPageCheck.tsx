import DeveloperLayerPage from "./DeveloperLayerPage";
import {withPageCheck, withButtonCheck, withSearchBarWithBack} from "../../common/PageCheck";
import DeveloperLayerConfig from "./DeveloperLayerConfig";

const SearchBar = withSearchBarWithBack(DeveloperLayerConfig.searchList());
const Button = withButtonCheck();

const DeveloperLayerPageCheck = withPageCheck(
    DeveloperLayerPage,
    SearchBar,
    Button,
);
export default DeveloperLayerPageCheck;