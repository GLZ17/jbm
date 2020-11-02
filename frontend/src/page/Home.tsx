import React from 'react';

const img = require('../assets/images/3.jpg');

const Home : React.FunctionComponent = ()=>{
    return (
        <h2 className={'flex-dc flex-xc-yc'}>
            <span className={'home-title'}>业务信息管理系统</span>
            <img src={img} alt={'banner'} className={'home-banner'}/>
        </h2>
    );
};

export default Home;