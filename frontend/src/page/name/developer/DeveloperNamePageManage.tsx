import DeveloperNamePage from "./DeveloperNamePage";
import DeveloperNameForm from "./DeveloperNameForm";
import DeveloperNameApi from "./DeveloperNameApi";
import DeveloperNameConfig from "./DeveloperNameConfig";
import PageNameManage from "../common/PageNameManage";

const DeveloperNamePageManage = PageNameManage(
    DeveloperNamePage,
    DeveloperNameForm,
    DeveloperNameConfig,
    DeveloperNameApi
);

export default DeveloperNamePageManage;
