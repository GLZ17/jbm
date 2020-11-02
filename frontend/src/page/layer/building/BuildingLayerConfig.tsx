import ConfigRoute from "../../../route/ConfigRoute";
import RegionNameConfig from "../../name/region/RegionNameConfig";
import DeveloperNameConfig from "../../name/developer/DeveloperNameConfig";
import CommunityNameConfig from "../../name/community/CommunityNameConfig";
import BuildingNameConfig from "../../name/building/BuildingNameConfig";
import {ISearchItem} from "../../common/PageInit";
import {IPageFormConfig} from "../../common/PageForm";

const BuildingLayerConfig = {
    config: (): IPageFormConfig => {
        const configList = [
            RegionNameConfig,
            DeveloperNameConfig,
            CommunityNameConfig,
            BuildingNameConfig
        ].map(it => it.config());
        return {
            fieldList: [
                "jbm_layer_building_id",
                ...configList.map(it => it.fieldList).map(it => it[0]),
                "jbm_layer_building_create_time"
            ],
            title: ConfigRoute.building_layer.name,
            headerList: [
                'id',
                ...configList.map(it => it.headerList).map(it => it[1]),
                '创建时间'
            ]
        }
    },
    searchList: (): ISearchItem[] => {
        return [
            RegionNameConfig,
            DeveloperNameConfig,
            CommunityNameConfig,
            BuildingNameConfig
        ].map(it => it.searchList()).map(it => it[0]);
    }
}

export default BuildingLayerConfig;

