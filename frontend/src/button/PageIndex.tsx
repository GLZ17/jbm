import React from 'react';
import Go from "./Go";
import {IObjectString} from "../api/IApi";

interface IProps {
    field: string;
    value: string | number;
    prevIndex: string | number;
    nextIndex: string | number;
    lastIndex: string | number;
    indexList: (string | number)[];
    onChange: (values: IObjectString) => any;
}


class PageIndex extends React.Component<IProps> {
    protected onChange = (values: IObjectString) => {
        let val = +values[this.props.field];
        val = Math.min(val, +this.props.lastIndex);
        val = Math.max(1, val);
        const index = val.toString();
        if (index !== this.props.value.toString()) {
            this.props.onChange(values);
            this.setState({value: index});
        }
    }
    protected bindOnClick = (index: string | number) => {
        return () => this.onChange({
            [this.props.field]: index.toString()
        });
    }

    public render() {
        const {
            prevIndex, field, value,
            lastIndex, nextIndex, indexList
        } = this.props;
        return (
            <div className={'flex-xc-yc button-index'}>
                <span onClick={this.bindOnClick(prevIndex)}
                      className={'button-index-btn'}>上一页</span>
                {indexList.map(it => {
                    const current = it.toString() === value.toString() ? 'button-index-current' : '';
                    return (<span key={it}
                                  onClick={this.bindOnClick(it)}
                                  className={`${current} button-index-btn`}>{it}</span>);
                })}
                <span onClick={this.bindOnClick(nextIndex)}
                      className={'button-index-btn'}>下一页</span>
                <Go field={field}
                    onChange={this.onChange}/>
                <div className={'flex button-index-caption'}>
                    <p className={'flex'}>共<span className={'button-index-total'}>{lastIndex}</span>页</p>
                </div>
            </div>
        );
    }
}

export default PageIndex;