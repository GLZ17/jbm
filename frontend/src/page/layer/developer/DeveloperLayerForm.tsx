import React from "react";
import {IObjectString} from "../../../api/IApi";
import ConfigRoute from "../../../route/ConfigRoute";
import FormForm from "../../../common/form/FormForm";
import FormCheck from "../../../common/form/FormCheck";
import PageForm, {IPageFormProps, IPageFormJoinLabel} from "../../common/PageForm";
import RegionNamePageCheck from "../../name/region/RegionNamePageCheck";
import DeveloperNamePageCheck from "../../name/developer/DeveloperNamePageCheck";
import DeveloperLayerApi from "./DeveloperLayerApi";
import DeveloperLayerConfig from './DeveloperLayerConfig';
import FormValidator, {IFormValidatorResult} from "../../../common/form/FormValidator";
import PageInit from "../../common/PageInit";
import RegionNameConfig from "../../name/region/RegionNameConfig";
import DeveloperNameConfig from "../../name/developer/DeveloperNameConfig";

const joinLabel: IPageFormJoinLabel = {};
[RegionNameConfig, DeveloperNameConfig]
    .map(it => it.config().fieldList)
    .forEach(it => {
        joinLabel[it[0]] = (item: IObjectString) => {
            return item[it[1]];
        }
    });
const list = [RegionNameConfig, DeveloperNameConfig]
    .map(it => it.config())
    .map(it => {
        return {
            field: it.fieldList[0],
            label: it.headerList[1]
        }
    });

class DeveloperLayerForm extends PageForm {
    public constructor(props: IPageFormProps) {
        super(props, {
            Rest: DeveloperLayerApi,
            title: ConfigRoute.developer_layer.name,
            joinLabel,
            nameId: DeveloperLayerConfig.config().fieldList[0],
            state: PageInit.instance().initFormState(list, joinLabel, props.item, props.relative)
        });
    }

    protected joinLabel = (label: string) => {
        return `请确定${label}`;
    }
    protected list = () => {
        const fieldList = DeveloperLayerConfig.config().fieldList;
        return [1, 2].map(it => fieldList[it])
            .map(it => this.state[it]);
    }
    protected validate = (): IFormValidatorResult => {
        const [f1st, s2ed] = this.list();
        return FormValidator
            .instance()
            .setItem(f1st)
            .isInteger(this.joinLabel(f1st.label), true)
            .setItem(s2ed)
            .isInteger(this.joinLabel(s2ed.label), true)
            .result();
    }
    public render = (): React.ReactNode => {
        const [f1st, s2ed] = this.list();
        return (<FormForm onCancel={this.onCancel}
                          onSubmit={this.onSubmit}
                          title={this.title}>
            <FormCheck PageCheck={RegionNamePageCheck}
                       it={f1st}
                       relative={this.props.relative}
                       onCheck={this.onCheck}/>
            <FormCheck PageCheck={DeveloperNamePageCheck}
                       it={s2ed}
                       relative={this.props.relative}
                       onCheck={this.onCheck}/>
        </FormForm>);
    }
}


export default DeveloperLayerForm;