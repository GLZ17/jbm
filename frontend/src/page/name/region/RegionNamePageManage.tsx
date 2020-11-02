import RegionNamePage from "./RegionNamePage";
import RegionNameForm from "./RegionNameForm";
import RegionNameApi from "./RegionNameApi";
import RegionNameConfig from "./RegionNameConfig";
import PageNameManage from "../common/PageNameManage";

const RegionNamePageManage = PageNameManage(
    RegionNamePage,
    RegionNameForm,
    RegionNameConfig,
    RegionNameApi
);

export default RegionNamePageManage;
