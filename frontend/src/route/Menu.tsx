import React from 'react';
import {Link} from "react-router-dom";
import ConfigRoute from "./ConfigRoute";


const config = [
    {
        label: '信息',
        list: [
            ConfigRoute.room_information,
            ConfigRoute.product_information,
        ]
    },
    {
        list: [
            ConfigRoute.region_name,
            ConfigRoute.developer_layer,
            ConfigRoute.community_layer,
            ConfigRoute.building_layer,
            ConfigRoute.room_layer,
            ConfigRoute.product_layer
        ],
        label: '层级'
    },
    {
        list: [
            ConfigRoute.region_name,
            ConfigRoute.developer_name,
            ConfigRoute.community_name,
            ConfigRoute.building_name,
            ConfigRoute.room_name,
            ConfigRoute.brand_name,
            ConfigRoute.product_name,
            ConfigRoute.process_name,
        ],
        label: '名称'
    },
];

const logo = require('../assets/images/1.jpg');

const Menu: React.FunctionComponent = () => {
    return (
        <ul className={'menu flex-dc'}>
            <li className={'flex-xc-yc'}>
                <div className={'flex-xc-yc menu-log-box'}>
                    <img src={logo} alt={'logo'} className={'menu-logo'}/>
                </div>
            </li>
            {config.map(it => {
                return (<li key={it.label}>
                    <p>{it.label}管理</p>
                    <ul className={'menu-name-list'}>
                        {it.list.map(it => {
                            return (<li key={it.path}>
                                <Link to={it.path} className={'menu-link'}>
                                    {it.name}
                                </Link>
                            </li>);
                        })}
                    </ul>
                </li>)
            })}
        </ul>
    );
};

export default Menu;