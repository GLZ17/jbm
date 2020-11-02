import {IObjectString} from "../../api/IApi";
import {
    IPageFormValuesItem,
    IPageFormValues
} from "../../page/common/PageForm";

export interface IFormValidatorResult {
    status: boolean;
    values: IPageFormValues;
    data: IObjectString;
    message: string[];
}

class FormValidator {
    protected readonly message: string[] = [];
    protected status: boolean = true;
    protected data: IObjectString = {};
    protected values: IPageFormValues = {};
    protected item ?: IPageFormValuesItem;

    public static instance(): FormValidator {
        return new FormValidator();
    }

    public result = (): IFormValidatorResult => {
        const {data, status, message, values} = this;
        return {data, status, message, values};
    }

    public setItem = (item: IPageFormValuesItem): FormValidator => {
        const {value, text, field, label} = item;
        this.item = {
            field, label,
            value: value.trim(),
            text: text.trim()
        };
        this.values[field] = this.item;
        this.data[field] = value;
        return this;
    }

    protected appendMessage = (message: string) => {
        if (this.item && !this.status && !this.message.length) {
            this.message.push(message);
        }
    }

    public isRequired = (message: string): FormValidator => {
        if (this.item) {
            this.status = this.status && this.item.value.length > 0;
            this.appendMessage(message);
        }
        return this;
    }

    public maxLen = (len: number, message: string): FormValidator => {
        if (this.item) {
            this.status = this.status && this.item.value.length <= len;
            this.appendMessage(message);
        }
        return this;
    }

    public minLen = (len: number, message: string): FormValidator => {
        if (this.item) {
            this.status = this.status && this.item.value.length >= len;
            this.appendMessage(message);
        }
        return this;
    }

    public isInteger = (message: string, require: boolean): FormValidator => {
        if (this.item) {
            if (!!this.item.value) {
                this.status = this.status && !!this.item.value.match(/^\d{1,8}$/);
                this.appendMessage(message);
            } else {
                this.status = this.status && !require;
                this.appendMessage(message);
            }

        }
        return this;
    }
}

export default FormValidator;