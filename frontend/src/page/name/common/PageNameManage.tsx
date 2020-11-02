import {
    withPageManage,
    withSearchBarWithAdd,
    withButtonEditRemove
} from "../../common/PageManage";
import {IConfigName} from "./ConfigName";
import {TypeApiName} from "./ApiName";
import {TypeFormName} from "./FormName";
import {TypePageName} from "./PageName";

const PageNameManage = (
    PageName: TypePageName,
    FormName: TypeFormName,
    ConfigName: IConfigName,
    ApiName: TypeApiName,
) => {
    const SearchBar = withSearchBarWithAdd(
        FormName,
        ConfigName.searchList()
    );
    const Button = withButtonEditRemove(
        FormName,
        ApiName,
        ConfigName.config().fieldList
    );
    return withPageManage(PageName, SearchBar, Button);
}


export default PageNameManage;