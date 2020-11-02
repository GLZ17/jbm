interface IItem {
    name: string;
    path: string;
}

const index: IItem = {name: '', path: '/index'};

const region_name: IItem = {name: '区域', path: '/name/region'};
const developer_name: IItem = {name: '开发商', path: '/name/developer'};
const community_name: IItem = {name: '小区', path: '/name/community'};
const building_name: IItem = {name: '楼栋(单元)', path: '/name/building'};
const room_name: IItem = {name: '房间', path: '/name/room'};
const brand_name: IItem = {name: '品牌', path: '/name/brand'};
const product_name: IItem = {name: '产品', path: '/name/product'};
const process_name: IItem = {name: '工序', path: '/name/process'};

const developer_layer: IItem = {name: '开发商', path: '/layer/developer'};
const community_layer: IItem = {name: '小区', path: '/layer/community'};
const building_layer: IItem = {name: '楼栋(单元)', path: '/layer/building'};
const room_layer: IItem = {name: '房间', path: '/layer/room'};
const product_layer: IItem = {name: '产品', path: '/layer/product'};

const product_information = {name: '产品', path: '/information/product'};
const room_information = {name: '房间', path: '/information/room'};
const ConfigRoute = {
    index,

    region_name,
    developer_name,
    community_name,
    building_name,
    room_name,
    brand_name,
    product_name,
    process_name,

    developer_layer,
    community_layer,
    building_layer,
    room_layer,
    product_layer,

    product_information,
    room_information
};

export default ConfigRoute;