import ConfigRoute from "../../../route/ConfigRoute";
import DeveloperNameApi from "./DeveloperNameApi";
import DeveloperNameConfig from './DeveloperNameConfig';
import FormName from "../common/FormName";

const DeveloperNameForm = FormName(
    ConfigRoute.developer_name.name,
    DeveloperNameConfig.config(),
    DeveloperNameApi
);

export default DeveloperNameForm;