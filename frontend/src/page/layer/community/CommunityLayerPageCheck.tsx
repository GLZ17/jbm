import CommunityLayerPage from "./CommunityLayerPage";
import {withPageCheck, withButtonCheck, withSearchBarWithBack} from "../../common/PageCheck";
import CommunityLayerConfig from "./CommunityLayerConfig";

const SearchBar = withSearchBarWithBack(CommunityLayerConfig.searchList());
const Button = withButtonCheck();

const CommunityLayerPageCheck = withPageCheck(
    CommunityLayerPage,
    SearchBar,
    Button,
);
export default CommunityLayerPageCheck;