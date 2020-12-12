import React from "react";
import {IObjectString} from "../../../api/IApi";
import ConfigRoute from "../../../route/ConfigRoute";
import FormForm from "../../../common/form/FormForm";
import FormCheck from "../../../common/form/FormCheck";
import PageForm, {IPageFormProps, IPageFormJoinLabel} from "../../common/PageForm";
import ProductInformationConfig from './ProductInformationConfig';
import FormValidator, {IFormValidatorResult} from "../../../common/form/FormValidator";
import PageInit from "../../common/PageInit";
import ProductLayerPageCheck from "../../layer/product/ProductLayerPageCheck";
import ProductInformationApi from "./ProductInformationApi";
import ProductLayerConfig from "../../layer/product/ProductLayerConfig";
import BrandNameConfig from "../../name/brand/BrandNameConfig";
import ProductNameConfig from "../../name/product/ProductNameConfig";
const joinLabel: IPageFormJoinLabel = {
    [ProductLayerConfig.config().fieldList[0]]: (item: IObjectString) => {
        return [BrandNameConfig, ProductNameConfig]
            .map(it => it.config().fieldList[1])
            .map(it => item[it])
            .join(' ');
    }
};

const list = [
    {
        field: ProductLayerConfig.config().fieldList[0],
        label: ProductLayerConfig.config().headerList[2],
    },
];

class ProductInformationForm extends PageForm {
    public constructor(props: IPageFormProps) {
        super(props, {
            Rest: ProductInformationApi,
            title: ConfigRoute.product_information.name,
            joinLabel,
            nameId: ProductInformationConfig.config().fieldList[0],
            state: PageInit.instance().initFormState(list, joinLabel, props.item, props.relative)
        });
    }

    protected joinLabel = (label: string) => {
        return `请确定${label}`;
    }
    protected list = () => {
        return [ProductLayerConfig]
            .map(it => it.config().fieldList[0])
            .map(it => this.state[it]);
    }
    protected validate = (): IFormValidatorResult => {
        const [f1st] = this.list();
        return FormValidator
            .instance()
            .setItem(f1st)
            .isInteger(this.joinLabel(f1st.label), true)
            .result();
    }
    public render = (): React.ReactNode => {
        const [f1st] = this.list();
        return (<FormForm onCancel={this.onCancel}
                          onSubmit={this.onSubmit}
                          title={this.title}>
            <FormCheck PageCheck={ProductLayerPageCheck}
                       it={f1st}
                       relative={this.props.relative}
                       onCheck={this.onCheck}/>
        </FormForm>);
    }
}


export default ProductInformationForm;