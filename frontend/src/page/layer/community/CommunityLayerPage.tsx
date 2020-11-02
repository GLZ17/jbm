import CommunityLayerApi from './CommunityLayerApi';
import CommunityLayerConfig from './CommunityLayerConfig';
import {withPage} from "../../common/PagePage";

const CommunityLayerPage = withPage(
    CommunityLayerConfig.searchList(),
    CommunityLayerConfig.config(),
    CommunityLayerApi,
);

export default CommunityLayerPage;