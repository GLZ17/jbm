import React from "react";
import {IButtonOperator, ISearchBar} from "../../table/TableList";
import Check from "../../button/Check";
import Search from "../../button/Search";
import {ISearchItem} from "./PageInit";
import Back from "../../button/Back";
import {IPageProps} from "./PagePage";
import {IObjectString} from "../../api/IApi";
import Popup from "../../common/popup/Popup";

export interface IPageCheckProps {
    onCancel: () => any;
    onCheck: (values: IObjectString) => any;
}

export const withButtonCheck = () => {
    const ButtonCheck: React.FunctionComponent<IButtonOperator> = (props) => {
        const {onCheck, item, relative} = props;
        return <Check item={item} relative={relative} onCheck={onCheck}/>
    };
    return ButtonCheck;
};

export const withSearchBarWithBack = (searchList: ISearchItem[]) => {
    const SearchBarWithBack: React.FunctionComponent<ISearchBar> = (props) => {
        const {onCancel, onUpdateList} = props;
        return (
            <div className={'flex-xb-yc box-c table-bar'}>
                <Search searchList={searchList}
                        onUpdateList={onUpdateList}/>
                <Back onCancel={onCancel}/>
            </div>
        );
    };
    return SearchBarWithBack;
};

export const withPageCheck = (
    Page: React.FunctionComponent<IPageProps>,
    SearchBar: React.FunctionComponent<ISearchBar>,
    ButtonOperator: React.FunctionComponent<IButtonOperator>
) => {
    const PageCheck: React.FunctionComponent<IPageCheckProps> = (props) => {
        return (
            <Popup>
                <div className={'table-check-page popup-content'}>
                    <Page {...props}
                          SearchBar={SearchBar}
                          ButtonOperator={ButtonOperator}
                          keepPath={false}/>
                </div>
            </Popup>
        );
    };
    return PageCheck;
};