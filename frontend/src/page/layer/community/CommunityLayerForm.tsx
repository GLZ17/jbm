import React from "react";
import {IObjectString} from "../../../api/IApi";
import ConfigRoute from "../../../route/ConfigRoute";
import FormForm from "../../../common/form/FormForm";
import FormCheck from "../../../common/form/FormCheck";
import PageForm, {IPageFormProps, IPageFormJoinLabel} from "../../common/PageForm";
import DeveloperLayerPageCheck from "../developer/DeveloperLayerPageCheck";
import CommunityNamePageCheck from "../../name/community/CommunityNamePageCheck";
import CommunityLayerApi from "./CommunityLayerApi";
import CommunityLayerConfig from './CommunityLayerConfig';
import FormValidator, {IFormValidatorResult} from "../../../common/form/FormValidator";
import PageInit from "../../common/PageInit";
import RegionNameConfig from "../../name/region/RegionNameConfig";
import DeveloperNameConfig from "../../name/developer/DeveloperNameConfig";
import CommunityNameConfig from "../../name/community/CommunityNameConfig";
import DeveloperLayerConfig from "../developer/DeveloperLayerConfig";

const joinLabel: IPageFormJoinLabel = {
    [CommunityNameConfig.config().fieldList[0]]: (item: IObjectString) => {
        return item[CommunityNameConfig.config().fieldList[1]];
    },
    [DeveloperLayerConfig.config().fieldList[0]]: (item: IObjectString) => {
        return [RegionNameConfig, DeveloperNameConfig]
            .map(it => it.config().fieldList[1])
            .map(it => item[it])
            .join(' ');
    }
};

const list = [
    {
        field: DeveloperLayerConfig.config().fieldList[0],
        label: DeveloperLayerConfig.config().headerList[2],
    },
    {
        field: CommunityNameConfig.config().fieldList[0],
        label: CommunityNameConfig.config().headerList[1],
    }
];

class CommunityLayerForm extends PageForm {
    public constructor(props: IPageFormProps) {
        super(props, {
            Rest: CommunityLayerApi,
            title: ConfigRoute.community_layer.name,
            joinLabel,
            nameId: CommunityLayerConfig.config().fieldList[0],
            state: PageInit.instance().initFormState(list, joinLabel, props.item, props.relative)
        });
    }

    protected joinLabel = (label: string) => {
        return `请确定${label}`;
    }
    protected list = () => {
        return [DeveloperLayerConfig, CommunityNameConfig]
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
            <FormCheck PageCheck={DeveloperLayerPageCheck}
                       it={f1st}
                       relative={this.props.relative}
                       onCheck={this.onCheck}/>
            <FormCheck PageCheck={CommunityNamePageCheck}
                       it={s2ed}
                       relative={this.props.relative}
                       onCheck={this.onCheck}/>
        </FormForm>);
    }
}


export default CommunityLayerForm;