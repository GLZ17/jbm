import BuildingLayerPage from "./BuildingLayerPage";
import BuildingLayerApi from "./BuildingLayerApi";
import BuildingLayerForm from "./BuildingLayerForm";
import BuildingLayerConfig from "./BuildingLayerConfig";
import {
    withPageManage,
    withSearchBarWithAdd,
    withButtonEditRemove
} from "../../common/PageManage";

const SearchBar = withSearchBarWithAdd(
    BuildingLayerForm,
    BuildingLayerConfig.searchList()
);
const Button = withButtonEditRemove(
    BuildingLayerForm,
    BuildingLayerApi,
    BuildingLayerConfig.config().fieldList
);

const BuildingLayerPageManage = withPageManage(
    BuildingLayerPage,
    SearchBar,
    Button,
);

export default BuildingLayerPageManage;
