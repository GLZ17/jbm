import ConfigRoute from "../../../route/ConfigRoute";
import ApiLayer from "../common/ApiLayer";

const DeveloperLayerApi = ApiLayer(ConfigRoute.developer_layer.path);
export default DeveloperLayerApi;