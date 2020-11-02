import React from "react";
import {IObjectString, IListRelative, TypeClassRest} from "../../api/IApi";
import {IFormValidatorResult} from "../../common/form/FormValidator";
import MessageLoadingUnique from "../../common/message/MessageLoadingUnique";
import MessageToastUnique from "../../common/message/MessageToastUnique";

export interface IPageFormConfig {
    headerList: string[];
    fieldList: string[];
    title: string;
}

export interface IPageFormProps {
    onCancel: () => any;
    onUpdateList?: (values: IObjectString) => any;
    item?: IObjectString;
    relative?: IListRelative;
}

export interface IPageFormValuesItem {
    value: string;
    field: string;
    label: string;
    text: string;
}


export interface IPageFormValues {
    [key: string]: IPageFormValuesItem;
}

export interface IPageFormJoinLabel {
    [key: string]: (item: IObjectString) => string;
}

interface IPageFormAssistantProps {
    Rest: TypeClassRest;
    nameId: string;
    title: string;
    state: IPageFormValues;
    joinLabel: IPageFormJoinLabel;
}

class PageForm extends React.Component<IPageFormProps, IPageFormValues> {
    protected assistant: IPageFormAssistantProps;
    protected title: string;

    public constructor(props: IPageFormProps, assistant: IPageFormAssistantProps) {
        super(props);
        this.state = assistant.state;
        this.assistant = assistant;
        this.title = `${this.props.item ? '更新' : '添加'}${assistant.title}`;
    }

    protected onCancel = this.props.onCancel;

    protected isDataChange = (values: IPageFormValues): boolean => {
        const {item} = this.props;
        let status = true;
        if (item) {
            status = false;
            Object.keys(values).forEach(it => {
                if (!status) {
                    status = values[it].value !== item[it];
                }
            });
        }
        return status;
    }

    protected update = (field: string, value: string, text: string) => {
        const values = this.state;
        values[field].text = text;
        values[field].value = value;
        this.setState(values);
    }

    protected onCheck = (field: string, values: IObjectString) => {
        this.update(
            field,
            values[field],
            this.assistant.joinLabel[field](values),
        );
    }

    protected onChange = (field: string, value: string) => {
        this.update(field, value, value);
    }

    protected validate = (): IFormValidatorResult => {
        return {
            status: false,
            values: this.state,
            data: {},
            message: ['请验证数据']
        };
    }

    protected request = async (data: IObjectString) => {
        MessageLoadingUnique.start();
        const {nameId, Rest} = this.assistant;
        const api = new Rest();
        let res;
        if (this.props.item) {
            let id = this.props.item[nameId];
            res = await api.put(id, data);
        } else {
            res = await api.post(data);
        }
        MessageLoadingUnique.stop();
        MessageToastUnique.message(res);
        if (res.status) {
            if (this.props.onUpdateList) {
                this.onCancel();
                this.props.onUpdateList({});
            }
        }
    }

    protected onSubmit = () => {
        const res = this.validate();
        if (res.status) {
            if (this.isDataChange(res.values)) {
                this.request(res.data).then().catch();
            } else {
                this.onCancel();
            }
        } else {
            res.message.forEach(it => MessageToastUnique.error(it));
        }
    }

    public render = (): React.ReactNode => {
        return null;
    }
}

export default PageForm;