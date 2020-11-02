import BrandNamePage from "./BrandNamePage";
import BrandNameConfig from './BrandNameConfig';
import PageNameCheck from "../common/PageNameCheck";

const BrandNamePageCheck = PageNameCheck(
    BrandNamePage,
    BrandNameConfig
);

export default BrandNamePageCheck;