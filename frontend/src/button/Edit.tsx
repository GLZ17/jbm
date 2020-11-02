import React from 'react';
import {IListRelative, IObjectString} from "../api/IApi";
import {IPageFormProps} from "../page/common/PageForm";
interface IProps {
    Form: React.ComponentType<IPageFormProps>;
    item: IObjectString;
    relative?: IListRelative;
    onUpdateList?: (values: IObjectString) => any;
}

interface IState {
    show: boolean;
}

class Edit extends React.Component<IProps, IState> {
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
        const {Form, relative, item, onUpdateList} = this.props;
        return (
            <div className={'flex'}>
               <span onClick={this.onClick}
                     className={'table-list-btn table-list-btn-edit'}>编辑</span>
                {this.state.show && (
                    <Form item={item}
                          relative={relative}
                          onUpdateList={onUpdateList}
                          onCancel={this.onCancel}/>
                )}
            </div>
        );
    }
}

export default Edit;