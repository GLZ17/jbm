import React from "react";
import {TypeClassRest} from "../../../api/IApi";
import FormForm from "../../../common/form/FormForm";
import FormInput from "../../../common/form/FormInput";
import FormValidator, {IFormValidatorResult} from "../../../common/form/FormValidator";
import PageForm, {IPageFormConfig, IPageFormProps, IPageFormJoinLabel} from "../../common/PageForm";
import PageInit from "../../common/PageInit";

export type TypeFormName = React.ComponentType<IPageFormProps>;

const FormName = (title: string, config: IPageFormConfig, Rest: TypeClassRest): React.ComponentType<IPageFormProps> => {
    const label = `${title}名称`;
    const nameId = config.fieldList[0];
    const list = [
        {
            field: config.fieldList[1],
            label: config.headerList[1]
        }
    ];
    const nameName = config.fieldList[1];
    const pageInit = PageInit.instance();
    const joinLabel : IPageFormJoinLabel= {};

    class FormBase extends PageForm {
        public constructor(props: IPageFormProps) {
            super(props, {
                Rest,
                nameId,
                title : title,
                state: pageInit.initFormState(list, joinLabel, props.item, props.relative),
                joinLabel
            });
        }

        public render = (): React.ReactNode => {
            const name = this.state[nameName];
            return (<FormForm onCancel={this.onCancel}
                              onSubmit={this.onSubmit}
                              title={this.title}>
                <FormInput attributes={{maxLength: 32, placeholder: `请输入${label}(必须)`}}
                           label={name.label}
                           field={name.field}
                           value={name.text}
                           onChange={this.onChange}/>
            </FormForm>);
        }

        protected validate = (): IFormValidatorResult => {
            return FormValidator
                .instance()
                .setItem(this.state[nameName])
                .isRequired(`${label}不能为空`)
                .maxLen(32, `${label}长度最大为32`)
                .result();
        }
    }

    return FormBase;
};

export default FormName;