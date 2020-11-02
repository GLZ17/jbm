import ConfigRoute from "../../../route/ConfigRoute";
import RegionNameApi from "./RegionNameApi";
import RegionNameConfig from './RegionNameConfig';
import FormName from "../common/FormName";

const RegionNameForm = FormName(
    ConfigRoute.region_name.name,
    RegionNameConfig.config(),
    RegionNameApi
);

export default RegionNameForm;