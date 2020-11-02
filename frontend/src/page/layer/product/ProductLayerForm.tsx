import React from "react";
import {IObjectString} from "../../../api/IApi";
import ConfigRoute from "../../../route/ConfigRoute";
import FormForm from "../../../common/form/FormForm";
import FormCheck from "../../../common/form/FormCheck";
import PageForm, {IPageFormProps, IPageFormJoinLabel} from "../../common/PageForm";
import BrandNamePageCheck from "../../name/brand/BrandNamePageCheck";
import ProductNamePageCheck from "../../name/product/ProductNamePageCheck";
import ProductLayerApi from "./ProductLayerApi";
import ProductLayerConfig from './ProductLayerConfig';
import FormValidator, {IFormValidatorResult} from "../../../common/form/FormValidator";
import PageInit from "../../common/PageInit";
import BrandNameConfig from "../../name/brand/BrandNameConfig";
import ProductNameConfig from "../../name/product/ProductNameConfig";

const joinLabel: IPageFormJoinLabel = {};
[BrandNameConfig, ProductNameConfig]
    .map(it => it.config().fieldList)
    .forEach(it => {
        joinLabel[it[0]] = (item: IObjectString) => {
            return item[it[1]];
        }
    });
const list = [BrandNameConfig, ProductNameConfig]
    .map(it => it.config())
    .map(it => {
        return {
            field: it.fieldList[0],
            label: it.headerList[1]
        }
    });

class ProductLayerForm extends PageForm {
    public constructor(props: IPageFormProps) {
        super(props, {
            Rest: ProductLayerApi,
            title: ConfigRoute.product_layer.name,
            joinLabel,
            nameId: ProductLayerConfig.config().fieldList[0],
            state: PageInit.instance().initFormState(list, joinLabel, props.item, props.relative)
        });
    }

    protected joinLabel = (label: string) => {
        return `请确定${label}`;
    }
    protected list = () => {
        const fieldList = ProductLayerConfig.config().fieldList;
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
            <FormCheck PageCheck={BrandNamePageCheck}
                       it={f1st}
                       relative={this.props.relative}
                       onCheck={this.onCheck}/>
            <FormCheck PageCheck={ProductNamePageCheck}
                       it={s2ed}
                       relative={this.props.relative}
                       onCheck={this.onCheck}/>
        </FormForm>);
    }
}


export default ProductLayerForm;