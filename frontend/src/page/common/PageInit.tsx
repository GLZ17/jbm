import {IListRelative, IObjectString} from "../../api/IApi";
import {
    IPageFormValues,
    IPageFormValuesItem,
    IPageFormJoinLabel
} from "./PageForm";

export interface ISearchItem {
    field: string;
    value: string;
    placeholder: string;
}

export interface IPageList {
    [key: string]: string | number;

    pageIndex: number,
    pageSize: number,
    pageNumber: number
}


export interface IPageState {
    dataList: IObjectString[],
    relative: IListRelative,
    pageList: IPageList,
    prevIndex: number,
    nextIndex: number,
    lastIndex: number,
    indexList: number[],
    pageSizeList: number[];
    pageNumberList: number[];
}

class PageInit {
    protected pageSizeList: number[] = [5, 8, 10, 12, 15, 20, 30, 50];
    protected pageNumberList: number[] = [5, 8, 10, 12, 15, 20];
    private readonly query: IObjectString;

    public constructor() {
        const res: IObjectString = {};
        decodeURIComponent(decodeURIComponent(window.location.search))
            .replace(/^[?]*/, '')
            .split('&')
            .map(it => it.split('='))
            .filter(it => it.length === 2)
            .forEach(it => {
                const [field, value] = it;
                res[field] = value;
            })
        this.query = res;
    }

    protected extractFromQuery = (name: string): string => {
        return this.query[name] || '';
    }
    protected isInteger = (value: string): boolean => {
        return !!value.match(/^\d{1,8}$/);
    }

    protected initListInteger = (name: string, list: number[], callback: (list: number[]) => any) => {
        const value = this.extractFromQuery(name);
        let res: number = list[0];
        if (this.isInteger(value)) {
            res = +value;
            if (list.indexOf(res) < 0) {
                callback([res, ...this.pageSizeList].sort((a: number, b: number) => a - b));
            }
        }
        return res;
    }

    public initPageIndex = (name: string) => {
        let index: number = 1;
        const value = this.extractFromQuery(name);
        if (this.isInteger(value)) {
            index = +value;
        }
        return index;
    }

    public initPageSize = (name: string): number => {
        return this.initListInteger(name, this.pageSizeList,
            (list: number[]) => this.pageSizeList = list);
    }

    public initPageNumber = (name: string): number => {
        return this.initListInteger(name, this.pageNumberList,
            (list: number[]) => this.pageNumberList = list);
    }

    public initSearch = (searchList: ISearchItem[]): IObjectString => {
        const res: IObjectString = {};
        searchList.forEach(it => {
            res[it.field] = it.value;
        });
        return res;
    }
    public initString = (name: string, defaultValue: string = '') => {
        const value = this.extractFromQuery(name);
        return !!value ? value : defaultValue;
    }

    public initPageSizeList = () => {
        return this.pageSizeList;
    }

    public initPageNumberList = () => {
        return this.pageNumberList;
    }

    public initPageList = (search: IObjectString): IPageList => {
        return {
            pageIndex: this.initPageIndex('pageIndex'),
            pageSize: this.initPageSize('pageSize'),
            pageNumber: this.initPageNumber('pageNumber'),
            ...search,
        };
    }
    public initPageState = (search: IObjectString): IPageState => {
        return {
            dataList: [],
            relative: {},
            pageList: this.initPageList(search),
            prevIndex: 1,
            nextIndex: 1,
            lastIndex: 1,
            indexList: [],
            pageNumberList: this.initPageNumberList(),
            pageSizeList: this.initPageSizeList(),
        }
    }

    public initFormStateItem = (field: string, label: string): IPageFormValuesItem => {
        return {value: '', label, text: '', field};
    }

    public copyRelativeProperties = (item: IObjectString, relative?: IListRelative): IObjectString => {
        const res = {...item};
        if (relative) {
            Object.keys(item).forEach(key => {
                const relativeItem = relative[key];
                if (relativeItem) {
                    const {field, values} = relativeItem;
                    const data = values[item[key]]
                    res[key] = data[key];
                    res[field] = data[field];
                }
            })
        }
        return res;
    }
    public initFormState = (
        data: ({ field: string, label: string })[],
        joinLabel: IPageFormJoinLabel,
        item ?: IObjectString,
        relative ?: IListRelative
    ): IPageFormValues => {
        const values: IPageFormValues = {};
        data.map(it => this.initFormStateItem(it.field, it.label))
            .forEach(it => {
                values[it.field] = it;
            });
        this.initFormStateItemText(values, joinLabel, item, relative);
        return values;
    }
    public initFormStateItemText = (
        values: IPageFormValues,
        joinLabel: IPageFormJoinLabel,
        item ?: IObjectString,
        relative ?: IListRelative
    ): void => {
        Object.keys(values).forEach(it => {
            if (item) {
                let text = values[it].value = item[it];
                if (relative && relative[it] && joinLabel[it]) {
                    text = joinLabel[it](this.copyRelativeProperties(item, relative));
                }
                values[it].text = text;
            }
        });
    }
    public static instance = (): PageInit => {
        return new PageInit();
    }
}

export default PageInit;