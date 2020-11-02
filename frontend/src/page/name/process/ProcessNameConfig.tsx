import ConfigRoute from "../../../route/ConfigRoute";
import ConfigName from "../common/ConfigName";

const ProcessNameConfig = ConfigName(
    'jbm_name_process',
    ConfigRoute.process_name.name
);

export default ProcessNameConfig;

