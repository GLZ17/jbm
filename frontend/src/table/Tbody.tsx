import React from 'react';
import {IButtonOperator} from "./TableList";
import {IListRelative, IObjectString} from "../api/IApi";

interface IProps {
    ButtonOperator: React.ComponentType<IButtonOperator>
    dataList: IObjectString[];
    relative: IListRelative;
    fieldList: string[];
    onCheck?: (values: IObjectString) => any;
    onUpdateList?: (values: IObjectString) => any;
}

const Tbody: React.FunctionComponent<IProps> = (props) => {
    const {
        dataList, relative, fieldList,
        ButtonOperator, onCheck, onUpdateList
    } = props;
    return (
        <tbody>
        {dataList.map(it => {
            return (
                <tr key={it[fieldList[0]]}>
                    {fieldList.map(key => {
                        let val: string = it[key];
                        const rel = relative[key];
                        if (!!val && rel) {
                            const {values, field} = rel;
                            const ob = values[val];
                            if (ob) {
                                val = ob[field];
                            }
                        }
                        return (<td key={key}>
                            <span>{val}</span>
                        </td>)
                    })}
                    <td>
                        <ButtonOperator item={it}
                                        relative={relative}
                                        onCheck={onCheck}
                                        onUpdateList={onUpdateList}/>
                    </td>
                </tr>)
        })}
        </tbody>
    );
}


export default Tbody;