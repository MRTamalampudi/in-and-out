import React, { memo } from "react";
import styles from "./table.module.scss";
import MetaRow from "./meta-row";
import TableContextProvider from "components/table/context";
import Pagination_ from "components/table/pagination";
import Table from "components/table/table";

type TableWrapperProps= {
    children: React.ReactNode;
    borders?: boolean;
    height?: number;
};

const TableWrapper_ = memo(({
    children,
    borders = true,
    height = undefined,
}: TableWrapperProps) => {
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

const TableWrapper = (props: TableWrapperProps) => (
    <TableContextProvider>
        <TableWrapper_ {...props}>{props.children}</TableWrapper_>
    </TableContextProvider>
);

TableWrapper.MetaRow = MetaRow;
TableWrapper.Pagination = Pagination_;
TableWrapper.Table = Table


export default TableWrapper;
