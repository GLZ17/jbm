import React from 'react';

export interface IFormInput {
    label: string;
    field: string;
    value: string;
    attributes?: React.InputHTMLAttributes<any>;
    onChange: (field: string, value: string) => any;
}

class FormInput extends React.Component<IFormInput> {
    public onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {onChange, field} = this.props;
        onChange(field, e.currentTarget.value);
    }

    public render() {
        const {attributes, label, field, value} = this.props;
        return (<div className={'flex-dc form-it'}>
            <label className={'form-it-label'}
                   htmlFor={field}>{label}</label>
            <input {...attributes}
                   id={field}
                   className={'form-it-input'}
                   onChange={this.onChange}
                   value={value}/>
        </div>);
    }
}

export default FormInput;
