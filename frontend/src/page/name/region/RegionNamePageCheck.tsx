import RegionNamePage from "./RegionNamePage";
import RegionNameConfig from './RegionNameConfig';
import PageNameCheck from "../common/PageNameCheck";

const RegionNamePageCheck = PageNameCheck(
    RegionNamePage,
    RegionNameConfig
);

export default RegionNamePageCheck;