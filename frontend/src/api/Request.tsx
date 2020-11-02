import axios from 'axios';

import {IApiResult, IObjectString} from "./IApi";

class Request<T> {
    protected errors() {
        return {
            message: '网络错误,检查服务器是否启动,ip是否正确',
            status: false,
        }
    };

    protected initFormData(data: IObjectString) {
        return JSON.stringify(data);
    }

    public list(url: string): Promise<IApiResult<T>> {
        return new Promise<IApiResult<T>>(resolve => {
            axios.get<IApiResult<T>>(url)
                .then(response => resolve(response.data))
                .catch(_ => resolve(this.errors()));
        });
    }

    public get(url: string): Promise<IApiResult<T>> {
        return new Promise<IApiResult<T>>(resolve => {
            axios.get<IApiResult<T>>(url)
                .then(response => resolve(response.data))
                .catch(_ => resolve(this.errors()));
        });
    }

    public delete(url: string): Promise<IApiResult<T>> {
        return new Promise<IApiResult<T>>(resolve => {
            axios.delete<IApiResult<T>>(url)
                .then(response => resolve(response.data))
                .catch(_ => resolve(this.errors()));
        });
    }

    public put(url: string, data: IObjectString): Promise<IApiResult<T>> {
        return new Promise<IApiResult<T>>(resolve => {
            axios.put<IApiResult<T>>(url, this.initFormData(data))
                .then(response => resolve(response.data))
                .catch(_ => resolve(this.errors()));
        });
    }

    public post(url: string, data: IObjectString): Promise<IApiResult<T>> {
        return new Promise<IApiResult<T>>(resolve => {
            axios.post<IApiResult<T>>(url, this.initFormData(data))
                .then(response => resolve(response.data))
                .catch(_ => resolve(this.errors()));
        });
    }
}

export default Request;