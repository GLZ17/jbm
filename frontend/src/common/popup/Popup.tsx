import React from 'react';

const Popup: React.FunctionComponent = (props) => {
    return (
        <div className={'popup fixed t0 l0 r0 b0 hw'}>
            <div className={'popup-shadow fixed t0 l0 hw'}/>
            {props.children}
        </div>
    );
}

export default Popup;