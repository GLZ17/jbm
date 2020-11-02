import React from 'react';
import {IObjectString} from "../api/IApi";
import MessageToastUnique from "../common/message/MessageToastUnique";

interface IProps {
    field: string;
    onChange: (values: IObjectString) => any;
}

interface IState {
    value: string;
}

class Go extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {value: ''};
    }

    public onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({value: e.currentTarget.value});
    }
    public onClick = () => {
        const value = this.state.value.trim();
        if (value.match(/^\d{1,8}$/)) {
            this.props.onChange({[this.props.field]: value});
        } else if (value.length > 0) {
            MessageToastUnique.error('页码必须是数字');
        }
        this.setState({value: ''});
    }

    public render() {
        return (
            <div className={'flex-xc-yc'}>
                <input className={'button-index-input'}
                       onChange={this.onChange}
                       maxLength={8}
                       value={this.state.value}/>
                <span onClick={this.onClick} className={'button-index-go'}>GO</span>
            </div>
        );
    }
}

export default Go;