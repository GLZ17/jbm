import Request from "./Request";

import {IObjectString} from "./IApi";

class Api {
    protected request<T>() {
        return new Request<T>();
    }

    protected prefix() {
        return '/api';
    }

    public joinUrl = (url: string) => {
        return `${this.prefix()}/${url.replace(/[/]*/, '')}`;
    }

    protected joinId = (url: string, id: string) => {
        return `${this.joinUrl(url)}/${id}`;
    }

    protected joinQueryUrl = (url: string, data: IObjectString) => {
        const fields = Object.keys(data);
        if (fields.length > 0) {
            const query = fields.map(it => `${it}=${data[it]}`).join("&");
            url = `${url}?${query}`;
        }
        return this.joinUrl(url);
    }

    public list<T>(url: string, data: IObjectString) {
        return this.request<T>().list(this.joinQueryUrl(url, data));
    }

    public get<T>(url: string, id: string) {
        return this.request<T>().get(this.joinId(url, id));
    }

    public delete<T>(url: string, id: string) {
        return this.request<T>().delete(this.joinId(url, id));
    }

    public put<T>(url: string, id: string, data: IObjectString) {
        return this.request<T>().put(this.joinId(url, id), data);
    }

    public post<T>(url: string, data: IObjectString) {
        return this.request<T>().post(this.joinUrl(url), data);
    }

    public static instance = () => {
        return new Api();
    }
}

export default Api;