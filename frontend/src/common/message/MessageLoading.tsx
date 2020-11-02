import React from 'react';

import Popup from "../popup/Popup";


const MessageLoading: React.FunctionComponent = () => {
    return (
        <Popup>
            <div className={'popup-content hw flex-xc-yc'}>
                <i className={'loading'}/>
            </div>
        </Popup>
    );
}


export default MessageLoading;