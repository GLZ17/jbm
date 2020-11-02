import RoomLayerPage from "./RoomLayerPage";
import RoomLayerApi from "./RoomLayerApi";
import RoomLayerForm from "./RoomLayerForm";
import RoomLayerConfig from "./RoomLayerConfig";
import {
    withPageManage,
    withSearchBarWithAdd,
    withButtonEditRemove
} from "../../common/PageManage";

const SearchBar = withSearchBarWithAdd(
    RoomLayerForm,
    RoomLayerConfig.searchList()
);
const Button = withButtonEditRemove(
    RoomLayerForm,
    RoomLayerApi,
    RoomLayerConfig.config().fieldList
);

const RoomLayerPageManage = withPageManage(
    RoomLayerPage,
    SearchBar,
    Button,
);

export default RoomLayerPageManage;
