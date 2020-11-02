import React from 'react';

const img = require('../assets/images/404.jpg');
const NotFound: React.FunctionComponent = () => {
    return (
        <h2 className={'flex flex-xc flex-yc h'}>
            <img src={img} alt={'404'}/>
        </h2>
    );
};

export default NotFound;