import React from 'react';
import Select from "./Select";
import {IObjectString} from "../api/IApi";

interface IProps {
    pageNumberList: (number | string)[];
    field: string;
    value?: string | number;
    onChange: (values: IObjectString) => any;
}

const PageNumber: React.FunctionComponent<IProps> = (props) => {
    const {value, field, onChange, pageNumberList} = props;
    return (
        <Select list={pageNumberList}
                field={field}
                value={value}
                onChange={onChange}
                compose={it => `${it}个页码`}/>
    );
}


export default PageNumber;