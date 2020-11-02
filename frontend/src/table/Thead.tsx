import React from 'react';

interface IProps {
    headerList: string[];
}

const Thead: React.FunctionComponent<IProps> = (props) => {
    return (
        <thead>
        <tr>
            {props.headerList.map(it => {
                return (<th key={it}>{it}</th>);
            })}
            <th>操作</th>
        </tr>
        </thead>
    );
}


export default Thead;