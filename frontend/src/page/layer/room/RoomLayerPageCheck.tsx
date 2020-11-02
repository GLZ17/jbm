import RoomLayerPage from "./RoomLayerPage";
import {withPageCheck, withButtonCheck, withSearchBarWithBack} from "../../common/PageCheck";
import RoomLayerConfig from "./RoomLayerConfig";

const SearchBar = withSearchBarWithBack(RoomLayerConfig.searchList());
const Button = withButtonCheck();

const RoomLayerPageCheck = withPageCheck(
    RoomLayerPage,
    SearchBar,
    Button,
);
export default RoomLayerPageCheck;