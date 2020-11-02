import React from 'react';
import {IButtonOperator, ISearchBar} from "../../table/TableList";
import {IPageFormProps} from "./PageForm";
import {TypeClassRest} from "../../api/IApi";
import Edit from "../../button/Edit";
import Remove from "../../button/Remove";
import Search from "../../button/Search";
import Add from "../../button/Add";
import {ISearchItem} from "./PageInit";
import {IPageProps} from "./PagePage";

export const withButtonEditRemove = (FormForm: React.ComponentType<IPageFormProps>, Rest: TypeClassRest, fieldList: string[]) => {
    const ButtonEditRemove: React.FunctionComponent<IButtonOperator> = (props) => {
        const {item, relative, onUpdateList} = props;
        return (
            <div className={'flex-xc-yc'}>
                <Edit Form={FormForm}
                      item={item}
                      relative={relative}
                      onUpdateList={onUpdateList}/>
                <Remove id={item[fieldList[0]]}
                        onUpdateList={onUpdateList}
                        Rest={Rest}/>
            </div>
        );
    };
    return ButtonEditRemove;
};

export const withSearchBarWithAdd = (FormForm: React.ComponentType<IPageFormProps>, searchList: ISearchItem[]) => {
    const SearchBarWithAdd: React.FunctionComponent<ISearchBar> = (props) => {
        const {onUpdateList, relative} = props;
        return (
            <div className={'flex-xb-yc box-c table-bar'}>
                <Search searchList={searchList}
                        onUpdateList={onUpdateList}/>
                <Add Form={FormForm}
                     relative={relative}
                     onUpdateList={onUpdateList}/>
            </div>
        );
    };
    return SearchBarWithAdd;
};

export const withPageManage = (
    Page: React.FunctionComponent<IPageProps>,
    SearchBar: React.FunctionComponent<ISearchBar>,
    ButtonOperator: React.FunctionComponent<IButtonOperator>,
) => {
    const PageManage: React.FunctionComponent = () => {
        return (
            <Page SearchBar={SearchBar}
                  ButtonOperator={ButtonOperator}
                  keepPath={false}/>
        );
    };
    return PageManage;
};