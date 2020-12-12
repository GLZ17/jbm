import ConfigRoute from "../../../route/ConfigRoute";
import ApiInformation from "../common/ApiInformation";

const ProductInformationApi = ApiInformation(ConfigRoute.product_information.path);
export default ProductInformationApi;