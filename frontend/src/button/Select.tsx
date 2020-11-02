import React from 'react';
import {IObjectString} from "../api/IApi";

interface IProps {
    list: (number | string)[];
    field: string;
    value?: string | number;
    onChange: (values: IObjectString) => any;
    compose: (value: string | number) => string;
}

interface IState {
    value: string | number;
}

class Select extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            value: props.value || props.list[0]
        };
    }

    public onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value;
        this.props.onChange({
            [this.props.field]: value
        });
        this.setState({value});
    }

    public render() {
        return (
            <div className={'flex-xc-yc button-index'}>
                <select onChange={this.onChange}
                        value={this.state.value}
                        className={'button-index-select'}>
                    {this.props.list.map(it => {
                        return (<option key={it}
                                        value={it}>{this.props.compose(it)}</option>);
                    })}
                </select>
            </div>
        );
    }
}

export default Select;