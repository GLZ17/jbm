import BuildingNameApi from "./BuildingNameApi";
import BuildingNameConfig from './BuildingNameConfig';
import PageName from "../common/PageName";

const BuildingNamePage = PageName(
    BuildingNameConfig,
    BuildingNameApi
);

export default BuildingNamePage;