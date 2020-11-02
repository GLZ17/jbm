import ConfigRoute from "../../../route/ConfigRoute";
import BrandNameApi from "./BrandNameApi";
import BrandNameConfig from './BrandNameConfig';
import FormName from "../common/FormName";

const BrandNameForm = FormName(
    ConfigRoute.brand_name.name,
    BrandNameConfig.config(),
    BrandNameApi
);

export default BrandNameForm;