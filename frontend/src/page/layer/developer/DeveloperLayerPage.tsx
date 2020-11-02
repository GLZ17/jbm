import DeveloperLayerApi from './DeveloperLayerApi';
import DeveloperLayerConfig from './DeveloperLayerConfig';
import {withPage} from "../../common/PagePage";

const DeveloperLayerPage = withPage(
    DeveloperLayerConfig.searchList(),
    DeveloperLayerConfig.config(),
    DeveloperLayerApi,
);

export default DeveloperLayerPage;