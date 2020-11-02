import ConfigRoute from "../../../route/ConfigRoute";
import ApiLayer from "../common/ApiLayer";

const ProductLayerApi = ApiLayer(ConfigRoute.product_layer.path);
export default ProductLayerApi;