import CommunityLayerPage from "./CommunityLayerPage";
import CommunityLayerApi from "./CommunityLayerApi";
import CommunityLayerForm from "./CommunityLayerForm";
import CommunityLayerConfig from "./CommunityLayerConfig";
import {
    withPageManage,
    withSearchBarWithAdd,
    withButtonEditRemove
} from "../../common/PageManage";

const SearchBar = withSearchBarWithAdd(
    CommunityLayerForm,
    CommunityLayerConfig.searchList()
);
const Button = withButtonEditRemove(
    CommunityLayerForm,
    CommunityLayerApi,
    CommunityLayerConfig.config().fieldList
);

const CommunityLayerPageManage = withPageManage(
    CommunityLayerPage,
    SearchBar,
    Button,
);

export default CommunityLayerPageManage;
