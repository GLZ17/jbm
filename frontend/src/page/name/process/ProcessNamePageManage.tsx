import ProcessNamePage from "./ProcessNamePage";
import ProcessNameForm from "./ProcessNameForm";
import ProcessNameApi from "./ProcessNameApi";
import ProcessNameConfig from "./ProcessNameConfig";
import PageNameManage from "../common/PageNameManage";

const ProcessNamePageManage = PageNameManage(
    ProcessNamePage,
    ProcessNameForm,
    ProcessNameConfig,
    ProcessNameApi
);


export default ProcessNamePageManage;
