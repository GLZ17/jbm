import React from 'react';
import {IObjectString} from "../../api/IApi";
import {IPageFormValuesItem} from "../../page/common/PageForm";
import {IListRelative} from "../../api/IApi";
import {IPageCheckProps} from "../../page/common/PageCheck";

interface IProps {
    it: IPageFormValuesItem;
    PageCheck?: React.FunctionComponent<IPageCheckProps>;
    onCheck: (field: string, values: IObjectString) => any;
    relative?: IListRelative;
}

interface IState {
    show: boolean;
}

class FormCheck extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {show: false};
    }

    public onClick = () => {
        this.setState({show: true});
    }
    public onCheck = (item: IObjectString) => {
        this.props.onCheck(this.props.it.field, item);
        this.onCancel();
    }
    public onCancel = () => {
        this.setState({show: false});
    }

    public render() {
        const {it: {label, text}, PageCheck} = this.props;
        return (<div className={'flex-dc form-it'}>
            <span className={'form-it-label'}>{label}</span>
            <div className={'flex-xb-yc'}>
                <span className={'form-it-check-value'}>{text}</span>
                <span onClick={this.onClick}
                      className={'table-list-btn table-list-btn-check'}>{label}</span>
            </div>
            {this.state.show &&
            PageCheck &&
            (<PageCheck onCheck={this.onCheck}
                        onCancel={this.onCancel}/>)}
        </div>);
    }
}

export default FormCheck;