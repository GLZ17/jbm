import React from 'react';
import {IObjectString} from "../api/IApi";

interface ISearchItem {
    field: string;
    value: string;
    placeholder?: string;
}

interface IProps {
    searchList: ISearchItem[];
    onUpdateList: (values: IObjectString) => any;
}

interface IState {
    list: ISearchItem[];
}

class Search extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            list: props.searchList
        };
    }

    public bind = (field: string) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            const list = this.state.list.map((it): ISearchItem => {
                if (it.field === field) {
                    it = {...it, value: e.currentTarget.value};
                }
                return it;
            });
            this.setState({list});
        };
    }
    public onButtonClick = () => {
        const data: IObjectString = {};
        const list = this.state.list.map(it => {
            it.value = it.value.trim();
            return it;
        });
        this.setState({list});
        list.forEach(it => {
            data[it.field] = it.value.trim();
        })
        this.props.onUpdateList(data);
    }

    public render() {
        return this.state.list.length > 0 && (
            <div className={'flex-xc-yc'}>
                {this.state.list.map(it => {
                    return (<input value={it.value}
                                   className={'button-input-search'}
                                   key={it.field}
                                   maxLength={32}
                                   onChange={this.bind(it.field)}
                                   placeholder={it.placeholder}/>);
                })}
                <span className={'button-search button'} onClick={this.onButtonClick}>搜索</span>
            </div>
        );
    }
}

export default Search;