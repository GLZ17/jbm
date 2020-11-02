import React from 'react';

export interface IToastItem {
    success: boolean;
    error: boolean;
    message: string;
    id: string;
}

export interface IToastProps {
    list: IToastItem[];
}

const MessageToast: React.FunctionComponent<IToastProps> = (props) => {
    return (<ul className={'toast r0 t0'}>
        {props.list.map(it => {
            const {success, error, message, id} = it;
            return (<li key={id} className={'flex-xc-yc toast-it'}>
                {success
                    ? (<p className={'toast-it-success toast-it-text'}>{message}</p>)
                    : (error
                        ? (<p className={'toast-it-error toast-it-text'}>{message}</p>)
                        : null)}
            </li>);
        })}
    </ul>);
};


export default MessageToast;