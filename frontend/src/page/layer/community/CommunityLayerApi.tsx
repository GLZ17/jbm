import ConfigRoute from "../../../route/ConfigRoute";
import ApiLayer from "../common/ApiLayer";

const CommunityLayerApi = ApiLayer(ConfigRoute.community_layer.path);
export default CommunityLayerApi;