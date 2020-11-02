import BrandNameApi from "./BrandNameApi";
import BrandNameConfig from './BrandNameConfig';
import PageName from "../common/PageName";

const BrandNamePage = PageName(
    BrandNameConfig,
    BrandNameApi
);

export default BrandNamePage;