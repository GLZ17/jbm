import DeveloperLayerPage from "./DeveloperLayerPage";
import DeveloperLayerApi from "./DeveloperLayerApi";
import DeveloperLayerForm from "./DeveloperLayerForm";
import DeveloperLayerConfig from "./DeveloperLayerConfig";
import {
    withPageManage,
    withSearchBarWithAdd,
    withButtonEditRemove
} from "../../common/PageManage";

const SearchBar = withSearchBarWithAdd(
    DeveloperLayerForm,
    DeveloperLayerConfig.searchList()
);
const Button = withButtonEditRemove(
    DeveloperLayerForm,
    DeveloperLayerApi,
    DeveloperLayerConfig.config().fieldList
);

const DeveloperLayerPageManage = withPageManage(
    DeveloperLayerPage,
    SearchBar,
    Button,
);

export default DeveloperLayerPageManage;
