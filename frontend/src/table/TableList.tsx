import React from 'react';
import {IObjectString, IListRelative, IApiRest} from "../api/IApi";
import MessageToastUnique from "../common/message/MessageToastUnique";
import MessageLoadingUnique from "../common/message/MessageLoadingUnique";
import {IPageState} from "../page/common/PageInit";
import {IPageFormConfig} from "../page/common/PageForm";
import PageBar from "../button/PageBar";
import Thead from "./Thead";
import Tbody from "./Tbody";
import {createBrowserHistory} from "history";

export interface ISearchBar {
    onUpdateList: (values: IObjectString) => any;
    onCancel?: () => any;
    relative?: IListRelative;
}

export interface IButtonOperator {
    item: IObjectString;
    relative?: IListRelative;
    onUpdateList?: (values: IObjectString) => any;
    onCheck?: (values: IObjectString) => any;
}


interface IProps {
    state: IPageState;
    config: IPageFormConfig;
    api: IApiRest;
    ButtonOperator: React.FunctionComponent<IButtonOperator>
    SearchBar: React.FunctionComponent<ISearchBar>;
    onCancel?: () => any;
    onCheck?: (values: IObjectString) => any;
    keepPath?: boolean;
}


class TableList extends React.Component<IProps, IPageState> {
    private exist = true;

    public componentWillUnmount() {
        this.exist = false;
    }

    public constructor(props: IProps) {
        super(props);
        this.state = props.state;
    }

    public componentDidMount() {
        this.onUpdateList().then().catch();
    }

    protected updatePageState = (values: IObjectString) => {
        const pageList = {
            ...this.state.pageList,
            ...values
        };
        this.setState({pageList});
        if (!this.props.keepPath) {
            const query = Object.keys(pageList)
                .map(it => `${it}=${pageList[it]}`)
                .join('&');
            let path: string = window.location.pathname;
            path = `${path}?${query}`;
            createBrowserHistory().push(path);
        }
        return pageList;
    }
    public onUpdateList = async (values: IObjectString = {}) => {
        values = this.updatePageState(values) as IObjectString;
        MessageLoadingUnique.start();
        const res = await this.props.api.list(values);
        MessageLoadingUnique.stop();
        if (res.status && res.data) {
            const {
                dataList, relative,
                pageIndex, pageSize,
                pageNumber, prevIndex,
                nextIndex, lastIndex, indexList
            } = res.data;
            this.setState({
                dataList: dataList,
                relative: relative,
                pageList: {
                    ...this.state.pageList,
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    pageIndex: pageIndex,
                },
                prevIndex: prevIndex,
                nextIndex: nextIndex,
                lastIndex: lastIndex,
                indexList: indexList
            });
        } else {
            MessageToastUnique.message(res);
        }
    }

    public render() {
        const {SearchBar, ButtonOperator, onCheck, config, onCancel} = this.props;
        const {
            dataList, pageSizeList, pageNumberList, indexList,
            relative, prevIndex, nextIndex, lastIndex, pageList
        } = this.state;
        const onUpdateList = this.onUpdateList;
        return (
            <div>
                <h2 className={'table-page-title text-c'}>{config.title}</h2>
                <SearchBar onCancel={onCancel}
                           relative={relative}
                           onUpdateList={onUpdateList}/>
                {dataList.length > 0
                    ? <React.Fragment>
                        <table className={'table-list'}>
                            <Thead headerList={config.headerList}/>
                            <Tbody ButtonOperator={ButtonOperator}
                                   dataList={dataList}
                                   relative={relative}
                                   onCheck={onCheck}
                                   onUpdateList={onUpdateList}
                                   fieldList={config.fieldList}/>
                        </table>
                        <PageBar pageNumberList={pageNumberList}
                                 indexList={indexList}
                                 pageSizeList={pageSizeList}
                                 onChange={onUpdateList}
                                 prevIndex={prevIndex}
                                 nextIndex={nextIndex}
                                 lastIndex={lastIndex}
                                 pageNumber={pageList.pageNumber}
                                 pageIndex={pageList.pageIndex}
                                 pageSize={pageList.pageSize}/>
                    </React.Fragment>
                    : <footer className={'table-page-footer text-c'}>暂无相关数据</footer>}
            </div>)
    }
}

export default TableList;