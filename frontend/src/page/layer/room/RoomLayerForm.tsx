import React from "react";
import {IObjectString} from "../../../api/IApi";
import ConfigRoute from "../../../route/ConfigRoute";
import FormForm from "../../../common/form/FormForm";
import FormCheck from "../../../common/form/FormCheck";
import PageForm, {IPageFormProps, IPageFormJoinLabel} from "../../common/PageForm";
import RoomNamePageCheck from "../../name/room/RoomNamePageCheck";
import BuildingLayerPageCheck from "../building/BuildingLayerPageCheck";
import RoomLayerApi from "./RoomLayerApi";
import RoomLayerConfig from './RoomLayerConfig';
import FormValidator, {IFormValidatorResult} from "../../../common/form/FormValidator";
import PageInit from "../../common/PageInit";
import RegionNameConfig from "../../name/region/RegionNameConfig";
import DeveloperNameConfig from "../../name/developer/DeveloperNameConfig";
import CommunityNameConfig from "../../name/community/CommunityNameConfig";
import BuildingNameConfig from "../../name/building/BuildingNameConfig";
import RoomNameConfig from "../../name/room/RoomNameConfig";
import BuildingLayerConfig from "../building/BuildingLayerConfig";

const joinLabel: IPageFormJoinLabel = {
    [RoomNameConfig.config().fieldList[0]]: (item: IObjectString) => {
        return item[RoomNameConfig.config().fieldList[1]];
    },
    [BuildingLayerConfig.config().fieldList[0]]: (item: IObjectString) => {
        return [RegionNameConfig, DeveloperNameConfig, CommunityNameConfig, BuildingNameConfig]
            .map(it => it.config().fieldList[1])
            .map(it => item[it])
            .join(' ');
    }
};

const list = [
    {
        field: BuildingLayerConfig.config().fieldList[0],
        label: BuildingLayerConfig.config().headerList[4],
    },
    {
        field: RoomNameConfig.config().fieldList[0],
        label: RoomNameConfig.config().headerList[1],
    }
];

class RoomLayerForm extends PageForm {
    public constructor(props: IPageFormProps) {
        super(props, {
            Rest: RoomLayerApi,
            title: ConfigRoute.room_layer.name,
            joinLabel,
            nameId: RoomLayerConfig.config().fieldList[0],
            state: PageInit.instance().initFormState(list, joinLabel, props.item, props.relative)
        });
    }

    protected joinLabel = (label: string) => {
        return `请确定${label}`;
    }
    protected list = () => {
        return [BuildingLayerConfig, RoomNameConfig]
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
            <FormCheck PageCheck={BuildingLayerPageCheck}
                       it={f1st}
                       relative={this.props.relative}
                       onCheck={this.onCheck}/>
            <FormCheck PageCheck={RoomNamePageCheck}
                       it={s2ed}
                       relative={this.props.relative}
                       onCheck={this.onCheck}/>
        </FormForm>);
    }
}


export default RoomLayerForm;