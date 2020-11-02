import ConfigRoute from "../../../route/ConfigRoute";
import ProcessNameApi from "./ProcessNameApi";
import ProcessNameConfig from './ProcessNameConfig';
import FormName from "../common/FormName";

const ProcessNameForm = FormName(
    ConfigRoute.process_name.name,
    ProcessNameConfig.config(),
    ProcessNameApi
);

export default ProcessNameForm;