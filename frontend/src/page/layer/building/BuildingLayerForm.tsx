import React from "react";
import {IObjectString} from "../../../api/IApi";
import ConfigRoute from "../../../route/ConfigRoute";
import FormForm from "../../../common/form/FormForm";
import FormCheck from "../../../common/form/FormCheck";
import PageForm, {IPageFormProps, IPageFormJoinLabel} from "../../common/PageForm";
import CommunityLayerPageCheck from "../community/CommunityLayerPageCheck";
import BuildingNamePageCheck from "../../name/building/BuildingNamePageCheck";
import BuildingLayerApi from "./BuildingLayerApi";
import BuildingLayerConfig from './BuildingLayerConfig';
import FormValidator, {IFormValidatorResult} from "../../../common/form/FormValidator";
import PageInit from "../../common/PageInit";
import RegionNameConfig from "../../name/region/RegionNameConfig";
import DeveloperNameConfig from "../../name/developer/DeveloperNameConfig";
import CommunityNameConfig from "../../name/community/CommunityNameConfig";
import BuildingNameConfig from "../../name/building/BuildingNameConfig";
import CommunityLayerConfig from "../community/CommunityLayerConfig";

const joinLabel: IPageFormJoinLabel = {
    [BuildingNameConfig.config().fieldList[0]]: (item: IObjectString) => {
        return item[BuildingNameConfig.config().fieldList[1]];
    },
    [CommunityLayerConfig.config().fieldList[0]]: (item: IObjectString) => {
        return [RegionNameConfig, DeveloperNameConfig, CommunityNameConfig]
            .map(it => it.config().fieldList[1])
            .map(it => item[it])
            .join(' ');
    }
};

const list = [
    {
        field: CommunityLayerConfig.config().fieldList[0],
        label: CommunityLayerConfig.config().headerList[3],
    },
    {
        field: BuildingNameConfig.config().fieldList[0],
        label: BuildingNameConfig.config().headerList[1],
    }
];

class BuildingLayerForm extends PageForm {
    public constructor(props: IPageFormProps) {
        super(props, {
            Rest: BuildingLayerApi,
            title: ConfigRoute.building_layer.name,
            joinLabel,
            nameId: BuildingLayerConfig.config().fieldList[0],
            state: PageInit.instance().initFormState(list, joinLabel, props.item, props.relative)
        });
    }

    protected joinLabel = (label: string) => {
        return `请确定${label}`;
    }
    protected list = () => {
        return [CommunityLayerConfig, BuildingNameConfig]
            .map(it => it.config().fieldList[0])
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
            <FormCheck PageCheck={CommunityLayerPageCheck}
                       it={f1st}
                       relative={this.props.relative}
                       onCheck={this.onCheck}/>
            <FormCheck PageCheck={BuildingNamePageCheck}
                       it={s2ed}
                       relative={this.props.relative}
                       onCheck={this.onCheck}/>
        </FormForm>);
    }
}


export default BuildingLayerForm;