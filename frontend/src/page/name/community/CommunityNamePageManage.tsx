import CommunityNamePage from "./CommunityNamePage";
import CommunityNameForm from "./CommunityNameForm";
import CommunityNameApi from "./CommunityNameApi";
import CommunityNameConfig from "./CommunityNameConfig";
import PageNameManage from "../common/PageNameManage";

const CommunityNamePageManage = PageNameManage(
    CommunityNamePage,
    CommunityNameForm,
    CommunityNameConfig,
    CommunityNameApi
);

export default CommunityNamePageManage;
