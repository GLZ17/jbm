import ConfigRoute from "../../../route/ConfigRoute";
import ApiLayer from "../common/ApiLayer";

const BuildingLayerApi = ApiLayer(ConfigRoute.building_layer.path);
export default BuildingLayerApi;