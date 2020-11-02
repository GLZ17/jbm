import React from 'react';
import {IObjectString, IListRelative} from "../api/IApi";
import PageInit from "../page/common/PageInit";

interface IProps {
    item: IObjectString;
    onCheck?: (values: IObjectString) => any;
    relative?: IListRelative;
}

class Check extends React.Component<IProps> {
    public onClick = () => {
        const {onCheck, relative, item} = this.props;
        if (onCheck) {
            onCheck(PageInit.instance().copyRelativeProperties(item, relative));
        }
    }

    public render() {
        return (
            <div className={'flex-xc-yc'}>
                <span className={'table-list-btn table-list-btn-check'}
                      onClick={this.onClick}>选择</span>
            </div>
        );
    }
}

export default Check;