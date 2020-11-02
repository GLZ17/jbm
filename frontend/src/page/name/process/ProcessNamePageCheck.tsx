import ProcessNamePage from "./ProcessNamePage";
import ProcessNameConfig from './ProcessNameConfig';
import PageNameCheck from "../common/PageNameCheck";

const ProcessNamePageCheck = PageNameCheck(
    ProcessNamePage,
    ProcessNameConfig
);

export default ProcessNamePageCheck;