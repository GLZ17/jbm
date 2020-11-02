import Rest from "./Rest";
export interface IObjectString {
    [key: string]: string;
}

interface IApiResultCommon {
    status: boolean;
    message: string;
}

export interface IApiResult<T> extends IApiResultCommon {
    data?: T;
}

export interface IListRelative {
    [key: string]: {
        field: string;
        values: {
            [key: string]: IObjectString;
        }
    }
}

export type IApiListData<T> = IObjectString & {
    total: number;
    prevIndex: number;
    nextIndex: number;
    lastIndex: number;
    indexList: number[];
    pageIndex: number;
    pageSize: number;
    pageNumber: number;
    dataList: T[];
    relative: IListRelative;
}

export interface IApiRest {
    list: (data: IObjectString) => Promise<IApiResult<IApiListData<IObjectString>>>;
    get: (id: string) => Promise<IApiResult<IObjectString>>;
    put: (id: string, data: IObjectString) => Promise<IApiResult<string>>;
    post: (data: IObjectString) => Promise<IApiResult<string>>;
    delete: (id: string) => Promise<IApiResult<string>>;
}

export type TypeClassRest = typeof Rest;