import React from 'react';
import PageNumber from "./PageNumber";
import PageIndex from "./PageIndex";
import PageSize from "./PageSize";
import {IObjectString} from "../api/IApi";

interface IProps {
    pageNumberList: number[];
    indexList: (number | string)[];
    pageSizeList: number[];
    onChange: (values: IObjectString) => any;
    nextIndex: number | string;
    prevIndex: number | string;
    pageNumber: number | string;
    pageIndex: number | string;
    pageSize: number | string;
    lastIndex: number | string;
}

const PageBar: React.FunctionComponent<IProps> = (props) => {
    const {
        pageNumberList, indexList, pageSizeList,
        pageNumber, pageIndex, pageSize,
        prevIndex, nextIndex, lastIndex,
        onChange
    } = props;
    return (
        <div className={'flex-xc-yc'}>
            <PageNumber pageNumberList={pageNumberList}
                        field={'pageNumber'}
                        value={pageNumber}
                        onChange={onChange}/>
            <PageSize pageSizeList={pageSizeList}
                      field={'pageSize'}
                      value={pageSize}
                      onChange={onChange}/>
            <PageIndex field={'pageIndex'}
                       value={pageIndex}
                       prevIndex={prevIndex}
                       nextIndex={nextIndex}
                       lastIndex={lastIndex}
                       onChange={onChange}
                       indexList={indexList}/>
        </div>
    );
}

export default PageBar;