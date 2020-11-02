import BuildingNamePage from "./BuildingNamePage";
import BuildingNameConfig from './BuildingNameConfig';
import PageNameCheck from "../common/PageNameCheck";

const BuildingNamePageCheck = PageNameCheck(
    BuildingNamePage,
    BuildingNameConfig
);

export default BuildingNamePageCheck;