import {IApiRest, IObjectString, IApiListData} from "./IApi";
import Api from "./Api";

class Rest implements IApiRest {
    protected url = (): string => '';
    protected api = Api.instance();
    public list = (data: IObjectString) => {
        return this.api.list<IApiListData<IObjectString>>(this.url(), data);
    }

    public get = (id: string) => {
        return this.api.get<IObjectString>(this.url(), id);
    }

    public delete = (id: string) => {
        return this.api.delete<string>(this.url(), id);
    }

    public put = (id: string, data: IObjectString) => {
        return this.api.put<string>(this.url(), id, data);
    }

    public post = (data: IObjectString) => {
        return this.api.post<string>(this.url(), data);
    }
}

export default Rest;