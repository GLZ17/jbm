import {
    withPageCheck,
    withButtonCheck,
    withSearchBarWithBack
} from "../../common/PageCheck";
import {IConfigName} from "./ConfigName";
import {TypePageName} from "./PageName";

const PageNameCheck = (PageName : TypePageName, ConfigName: IConfigName) => {
    const SearchBar = withSearchBarWithBack(ConfigName.searchList());
    const Button = withButtonCheck();
    return withPageCheck(
        PageName,
        SearchBar,
        Button,
    );
};

export default PageNameCheck;