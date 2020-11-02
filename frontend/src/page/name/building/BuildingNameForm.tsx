import ConfigRoute from "../../../route/ConfigRoute";
import BuildingNameApi from "./BuildingNameApi";
import BuildingNameConfig from './BuildingNameConfig';
import FormName from "../common/FormName";

const BuildingNameForm = FormName(
    ConfigRoute.building_name.name,
    BuildingNameConfig.config(),
    BuildingNameApi
);

export default BuildingNameForm;