import ConfigRoute from "../../../route/ConfigRoute";
import CommunityNameApi from "./CommunityNameApi";
import CommunityNameConfig from './CommunityNameConfig';
import FormName from "../common/FormName";

const CommunityNameForm = FormName(
    ConfigRoute.community_name.name,
    CommunityNameConfig.config(),
    CommunityNameApi
);

export default CommunityNameForm;