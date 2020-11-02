import React from 'react';
import {IObjectString, TypeClassRest} from "../../api/IApi";
import {IPageFormConfig} from "./PageForm";
import PageInit, {IPageState, ISearchItem} from "./PageInit";
import TableList, {IButtonOperator, ISearchBar} from "../../table/TableList";

export interface IPageProps {
    onCancel?: () => any;
    onCheck?: (values: IObjectString) => any;
    keepPath: boolean;
    ButtonOperator: React.FunctionComponent<IButtonOperator>;
    SearchBar: React.FunctionComponent<ISearchBar>;
}

export const withPage = (searchList: ISearchItem[], config: IPageFormConfig, Rest: TypeClassRest) => {
    const Page: React.FunctionComponent<IPageProps> = (props) => {
        const init: PageInit = PageInit.instance();
        const search: IObjectString = init.initSearch(searchList);
        const state: IPageState = init.initPageState(search);
        const {
            onCheck, onCancel,
            keepPath,
            SearchBar, ButtonOperator
        } = props;
        return (
            <TableList SearchBar={SearchBar}
                       ButtonOperator={ButtonOperator}
                       config={config}
                       api={new Rest()}
                       onCheck={onCheck}
                       onCancel={onCancel}
                       keepPath={keepPath}
                       state={state}/>
        );
    };
    return Page;
}