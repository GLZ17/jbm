export const RegionName = `
create table jbm_name_region (
    jbm_name_region_id int primary key auto_increment,
    jbm_name_region_create_time  timestamp,
    jbm_name_region_name varchar(32) unique not null
) charset = utf8 engine = InnoDB;
`;

export const DeveloperName = `
create table jbm_name_developer (
    jbm_name_developer_id int primary key auto_increment,
    jbm_name_developer_create_time  timestamp,
    jbm_name_developer_name varchar(32) unique not null
) charset = utf8 engine = InnoDB;
`;

export const DeveloperLayer = `
create table jbm_layer_developer (
    jbm_layer_developer_id int primary key auto_increment,
    jbm_layer_developer_create_time  timestamp,
    jbm_name_region_id int not null,
    jbm_name_developer_id int not null,
    unique key (jbm_name_region_id, jbm_name_developer_id)
) charset = utf8 engine = InnoDB;
`;

export const CommunityName = `
create table jbm_name_community (
    jbm_name_community_id int primary key auto_increment,
    jbm_name_community_create_time  timestamp,
    jbm_name_community_name varchar(32) unique not null
) charset = utf8 engine = InnoDB;
`;

export const CommunityLayer = `
create table jbm_layer_community (
    jbm_layer_community_id int primary key auto_increment,
    jbm_layer_community_create_time  timestamp,
    jbm_layer_developer_id int not null,
    jbm_name_community_id int not null,
    unique key (jbm_layer_developer_id, jbm_name_community_id)
) charset = utf8 engine = InnoDB;
`;

export const BuildingName = `
create table jbm_name_building (
    jbm_name_building_id int primary key auto_increment,
    jbm_name_building_create_time  timestamp,
    jbm_name_building_name varchar(32) unique not null
) charset = utf8 engine = InnoDB;
`;

export const BuildingLayer = `
create table jbm_layer_building (
    jbm_layer_building_id int primary key auto_increment,
    jbm_layer_building_create_time  timestamp,
    jbm_layer_community_id int not null,
    jbm_name_building_id int not null,
    unique key (jbm_layer_community_id, jbm_name_building_id)
) charset = utf8 engine = InnoDB;
`;

export const RoomName = `
create table jbm_name_room (
    jbm_name_room_id int primary key auto_increment,
    jbm_name_room_create_time  timestamp,
    jbm_name_room_name varchar(32) unique not null
) charset = utf8 engine = InnoDB;
`;

export const RoomLayer = `
create table jbm_layer_room (
    jbm_layer_room_id int primary key auto_increment,
    jbm_layer_room_create_time  timestamp,
    jbm_layer_building_id int not null,
    jbm_name_room_id int not null,
    unique key (jbm_layer_building_id, jbm_name_room_id)
) charset = utf8 engine = InnoDB;
`;


export const BrandName = `
create table jbm_name_brand (
    jbm_name_brand_id int primary key auto_increment,
    jbm_name_brand_create_time  timestamp,
    jbm_name_brand_name varchar(32) unique not null
) charset = utf8 engine = InnoDB;
`;

export const ProcessName = `
create table jbm_name_process (
    jbm_name_process_id int primary key auto_increment,
    jbm_name_process_create_time  timestamp,
    jbm_name_process_name varchar(32) unique not null
) charset = utf8 engine = InnoDB;
`;


export const ProductName = `
create table jbm_name_product (
    jbm_name_product_id int primary key auto_increment,
    jbm_name_product_create_time  timestamp,
    jbm_name_product_name varchar(32) unique not null
) charset = utf8 engine = InnoDB;
`;

export const ProductLayer = `
create table jbm_layer_product (
    jbm_layer_product_id int primary key auto_increment,
    jbm_layer_product_create_time  timestamp,
    jbm_name_brand_id int not null,
    jbm_name_product_id int not null,
    unique key (jbm_name_brand_id, jbm_name_product_id)
) charset = utf8 engine = InnoDB;
`;

export const ProductInformation = `
create table jbm_information_product (
    jbm_information_product_id int primary key auto_increment,
    jbm_information_product_create_time  timestamp,
    jbm_layer_product_id int not null
) charset = utf8 engine = InnoDB;
`;

export const RoomInformation = `
create table jbm_information_room (
    jbm_information_room_id int primary key auto_increment,
    jbm_information_room_create_time  timestamp,
    jbm_layer_room_id int not null,
    jbm_name_process_id int not null,
    jbm_information_product_id int not null
) charset = utf8 engine = InnoDB;
`;
