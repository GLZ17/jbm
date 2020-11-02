import React from 'react';

import Popup from "../popup/Popup";

interface IProps {
    message: string;
    onConfirmClick: () => any;
    onCancelClick: () => any;
}

const MessageDialog: React.FunctionComponent<IProps> = (props) => {
    return (
        <Popup>
            <div className={'flex-xc-yc popup-content'}>
                <div className={'dialog'}>
                    <p className={'dialog-text line-break text-c'}>{props.message}</p>
                    <div className={'flex-xb-yc dialog-btn box-c'}>
                        <span className={'dialog-btn-it'}
                              onClick={props.onCancelClick}>取消</span>
                        <span className={'dialog-btn-it'}
                              onClick={props.onConfirmClick}>确定</span>
                    </div>
                </div>
            </div>
        </Popup>
    );
}

export default MessageDialog;