import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import ConfigRoute from "./ConfigRoute";

import NotFound from "../page/NotFound";
import Home from "../page/Home";
import RegionNamePageManage from "../page/name/region/RegionNamePageManage";
import DeveloperNamePageManage from "../page/name/developer/DeveloperNamePageManage";
import CommunityNamePageManage from "../page/name/community/CommunityNamePageManage";
import BuildingNamePageManage from "../page/name/building/BuildingNamePageManage";
import RoomNamePageManage from "../page/name/room/RoomNamePageManage";
import BrandNamePageManage from "../page/name/brand/BrandNamePageManage";
import ProductNamePageManage from "../page/name/product/ProductNamePageManage";
import ProcessNamePageManage from "../page/name/process/ProcessNamePageManage";

import DeveloperLayerPageManage from "../page/layer/developer/DeveloperLayerPageManage";
import CommunityLayerPageManage from "../page/layer/community/CommunityLayerPageManage";
import BuildingLayerPageManage from "../page/layer/building/BuildingLayerPageManage";
import RoomLayerPageManage from "../page/layer/room/RoomLayerPageManage";
import ProductLayerPageManage from "../page/layer/product/ProductLayerPageManage";

const dbs = [
    {
        component: Home,
        path: ConfigRoute.index.path,
    },
    {
        component: RegionNamePageManage,
        path: ConfigRoute.region_name.path
    },
    {
        component: DeveloperNamePageManage,
        path: ConfigRoute.developer_name.path
    },
    {
        component: CommunityNamePageManage,
        path: ConfigRoute.community_name.path
    },
    {
        component: BuildingNamePageManage,
        path: ConfigRoute.building_name.path
    },
    {
        component: RoomNamePageManage,
        path: ConfigRoute.room_name.path
    },

    {
        component: BrandNamePageManage,
        path: ConfigRoute.brand_name.path
    },
    {
        component: ProductNamePageManage,
        path: ConfigRoute.product_name.path
    },
    {
        component: ProcessNamePageManage,
        path: ConfigRoute.process_name.path
    },

    {
        component: DeveloperLayerPageManage,
        path: ConfigRoute.developer_layer.path
    },
    {
        component: CommunityLayerPageManage,
        path: ConfigRoute.community_layer.path
    },
    {
        component: BuildingLayerPageManage,
        path: ConfigRoute.building_layer.path
    },
    {
        component: RoomLayerPageManage,
        path: ConfigRoute.room_layer.path
    },
    {
        component: ProductLayerPageManage,
        path: ConfigRoute.product_layer.path
    }
];

const Routes: React.FunctionComponent = () => {
    return (
        <Switch>
            <Redirect exact={true} to={ConfigRoute.index.path} from={'/'}/>
            {dbs.map(it => {
                return (
                    <Route key={it.path}
                           exact={true}
                           component={it.component}
                           path={it.path}/>
                );
            })}
            <Route component={NotFound}/>
        </Switch>
    );
};

export default Routes;