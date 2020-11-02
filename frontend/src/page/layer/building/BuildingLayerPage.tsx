import BuildingLayerApi from './BuildingLayerApi';
import BuildingLayerConfig from './BuildingLayerConfig';
import {withPage} from "../../common/PagePage";

const BuildingLayerPage = withPage(
    BuildingLayerConfig.searchList(),
    BuildingLayerConfig.config(),
    BuildingLayerApi,
);

export default BuildingLayerPage;