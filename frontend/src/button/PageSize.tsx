import React from 'react';
import Select from "./Select";
import {IObjectString} from "../api/IApi";

interface IProps {
    pageSizeList: (number | string)[];
    field: string;
    value?: string | number;
    onChange: (values: IObjectString) => any;
}

const PageSize: React.FunctionComponent<IProps> = (props) => {
    const {value, field, onChange, pageSizeList} = props;
    return (
        <Select list={pageSizeList}
                field={field}
                value={value}
                onChange={onChange}
                compose={it => `${it}条/页`}/>
    );
}


export default PageSize;