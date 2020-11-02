import React from 'react';
import MessageToastUnique from "../common/message/MessageToastUnique";
import MessageLoadingUnique from "../common/message/MessageLoadingUnique";
import MessageDialogUnique from "../common/message/MessageDialogUnique";
import {IObjectString, TypeClassRest} from "../api/IApi";


interface IProps {
    id: string;
    message?: string;
    Rest: TypeClassRest;
    onUpdateList?: (values: IObjectString) => any;
}

class Remove extends React.Component<IProps> {
    public onClick = () => {
        const {id, onUpdateList, message, Rest} = this.props;
        const msg = message || `确定删除id=${id}的数据`;
        MessageDialogUnique.alert(msg, async () => {
            MessageLoadingUnique.start();
            const res = await new Rest().delete(this.props.id);
            MessageLoadingUnique.stop();
            if (res.status && onUpdateList) {
                onUpdateList({});
            } else {
                MessageToastUnique.message(res);
            }
        });
    }

    public render() {
        return (
            <div className={'flex-xc-yc'}>
                <span onClick={this.onClick}
                      className={'table-list-btn table-list-btn-remove'}>册除</span>
            </div>
        );
    }
}

export default Remove;