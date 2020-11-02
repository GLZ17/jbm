import React from 'react';
import {IObjectString, IListRelative} from "../api/IApi";
import {IPageFormProps} from "../page/common/PageForm";

interface IProps {
    onUpdateList: (values: IObjectString) => any;
    Form: React.ComponentType<IPageFormProps>;
    relative?: IListRelative;
}

interface IState {
    show: boolean;
}

class Add extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {show: false};
    }

    public setShow = (show: boolean, callback ?: () => {}) => {
        this.setState({show}, callback);
    }
    public onCancel = () => {
        this.setShow(false);
    }
    public onClick = () => {
        this.setShow(true);
    }

    public render() {
        const {Form, onUpdateList, relative} = this.props;
        return (
            <div className={'flex'}>
                <span className={'button-add button'}
                      onClick={this.onClick}>添加</span>
                {this.state.show && Form && (
                    <Form onUpdateList={onUpdateList}
                          relative={relative}
                          onCancel={this.onCancel}/>
                )}
            </div>
        );
    }
}

export default Add;