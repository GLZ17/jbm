import RegionNameApi from "./RegionNameApi";
import RegionNameConfig from './RegionNameConfig';
import PageName from "../common/PageName";

const RegionNamePage = PageName(
    RegionNameConfig,
    RegionNameApi
);

export default RegionNamePage;