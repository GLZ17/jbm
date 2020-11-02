import ConfigRoute from "../../../route/ConfigRoute";
import ApiLayer from "../common/ApiLayer";

const RoomLayerApi = ApiLayer(ConfigRoute.room_layer.path);
export default RoomLayerApi;