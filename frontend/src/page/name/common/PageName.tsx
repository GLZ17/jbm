import React from "react";
import {withPage} from "../../common/PagePage";
import {IConfigName} from "./ConfigName";
import {TypeApiName} from "./ApiName";
import {IPageProps} from "../../common/PagePage";

export type TypePageName = React.FunctionComponent<IPageProps>;

const PageName = (ConfigName: IConfigName, ApiName: TypeApiName) => {
    return withPage(
        ConfigName.searchList(),
        ConfigName.config(),
        ApiName,
    )
}

export default PageName;