import ProcessNameApi from "./ProcessNameApi";
import ProcessNameConfig from './ProcessNameConfig';
import PageName from "../common/PageName";

const ProcessNamePage = PageName(
    ProcessNameConfig,
    ProcessNameApi
);

export default ProcessNamePage;