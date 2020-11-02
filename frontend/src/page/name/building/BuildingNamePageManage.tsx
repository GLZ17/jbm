import BuildingNamePage from "./BuildingNamePage";
import BuildingNameForm from "./BuildingNameForm";
import BuildingNameApi from "./BuildingNameApi";
import BuildingNameConfig from "./BuildingNameConfig";
import PageNameManage from "../common/PageNameManage";

const BuildingNamePageManage = PageNameManage(
    BuildingNamePage,
    BuildingNameForm,
    BuildingNameConfig,
    BuildingNameApi
);

export default BuildingNamePageManage;
