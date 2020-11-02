import BuildingLayerPage from "./BuildingLayerPage";
import {withPageCheck, withButtonCheck, withSearchBarWithBack} from "../../common/PageCheck";
import BuildingLayerConfig from "./BuildingLayerConfig";

const SearchBar = withSearchBarWithBack(BuildingLayerConfig.searchList());
const Button = withButtonCheck();

const BuildingLayerPageCheck = withPageCheck(
    BuildingLayerPage,
    SearchBar,
    Button,
);
export default BuildingLayerPageCheck;