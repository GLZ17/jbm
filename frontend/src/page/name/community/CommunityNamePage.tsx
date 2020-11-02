import CommunityNameApi from "./CommunityNameApi";
import CommunityNameConfig from './CommunityNameConfig';
import PageName from "../common/PageName";

const CommunityNamePage = PageName(
    CommunityNameConfig,
    CommunityNameApi
);

export default CommunityNamePage;