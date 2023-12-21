import React, { memo, useContext, useEffect } from "react";
import styles from "./table.module.scss";
import MetaRow, { MetaRowProps } from "./meta-row";
import TableContextProvider, { TableContext } from "components/table/context";
import Pagination_ from "components/table/pagination";

type TableWrapperProps<T> = {
    children: React.ReactNode;
    borders?: boolean;
    height?: number;
    data?: T[];
} & MetaRowProps;

const TableWrapper_ = memo(<T extends {}>({
    children,
    borders = true,
    height = undefined,
    data,
}: TableWrapperProps<T>) => {

    const { setTableData, setSelectionList } = useContext(TableContext);
    console.log("Table render");

    useEffect(() => {
        console.log("Table inside render");
        setTableData(data || []);
    }, [data, setTableData]);
    return (
        <div
            className={`${styles.Table}
             ${borders ? styles.borders : ""}
             ${borders ? styles.radius : ""}
             ${height ? "h" + height + "p" : styles.defaultHeight}
             `}
        >
            {children}
        </div>
    );
})

const TableWrapper = (props: TableWrapperProps<any>) => (
    <TableContextProvider>
        <TableWrapper_ {...props}>{props.children}</TableWrapper_>
    </TableContextProvider>
);

TableWrapper.MetaRow = MetaRow;
TableWrapper.Pagination = Pagination_;


export default TableWrapper;
