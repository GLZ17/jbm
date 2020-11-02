import DeveloperNameApi from "./DeveloperNameApi";
import DeveloperNameConfig from './DeveloperNameConfig';
import PageName from "../common/PageName";

const DeveloperNamePage = PageName(
    DeveloperNameConfig,
    DeveloperNameApi
);

export default DeveloperNamePage;