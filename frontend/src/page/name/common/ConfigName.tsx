import {IPageFormConfig} from "../../common/PageForm";
import {ISearchItem} from "../../common/PageInit";
import PageConfig from "../../common/PageConfig";

export interface IConfigName {
    config: () => IPageFormConfig;
    searchList: () => ISearchItem[];
}

const ConfigName = (tableName: string, title: string) => {
    const res = {
        config: (): IPageFormConfig => {
            return {
                fieldList: [
                    "id",
                    "name",
                    "create_time"
                ].map(it => `${tableName}_${it}`),
                headerList: ['id', `${title}名称`, '创建时间'],
                title,
            };
        },
        searchList: (): ISearchItem[] => {
            return PageConfig.initSearchList(res.config(), [1]);
        }
    };
    return res;
}

export default ConfigName;