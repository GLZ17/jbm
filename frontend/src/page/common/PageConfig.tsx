import {ISearchItem} from "./PageInit";
import PageInit from "./PageInit";
import {IPageFormConfig} from "./PageForm";

const PageConfig = {
    initSearchItem: (item: ISearchItem): ISearchItem => {
        item.value = PageInit.instance().initString(item.field);
        return item;
    },
    initSearchList: (config: IPageFormConfig, indexList: number[]): ISearchItem[] => {
        const {fieldList, headerList} = config;
        return indexList.map(it => {
            return {
                field: fieldList[it],
                value: '',
                placeholder: headerList[it]
            };
        }).map(it => PageConfig.initSearchItem(it));
    }
};


export default PageConfig;