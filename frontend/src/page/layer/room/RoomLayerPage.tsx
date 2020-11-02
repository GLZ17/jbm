import RoomLayerApi from './RoomLayerApi';
import RoomLayerConfig from './RoomLayerConfig';
import {withPage} from "../../common/PagePage";

const RoomLayerPage = withPage(
    RoomLayerConfig.searchList(),
    RoomLayerConfig.config(),
    RoomLayerApi,
);

export default RoomLayerPage;