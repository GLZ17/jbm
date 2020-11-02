import BrandNamePage from "./BrandNamePage";
import BrandNameForm from "./BrandNameForm";
import BrandNameApi from "./BrandNameApi";
import BrandNameConfig from "./BrandNameConfig";
import PageNameManage from "../common/PageNameManage";

const BrandNamePageManage = PageNameManage(
    BrandNamePage,
    BrandNameForm,
    BrandNameConfig,
    BrandNameApi
);

export default BrandNamePageManage;
