import React, { useContext, useEffect } from "react";
import styles from "./table.module.scss";
import { Pagination } from "@mantine/core";
import MetaRow, { MetaRowProps } from "./meta-row";
import Page from "model/page";
import { useSearchParams } from "react-router-dom";
import TableContextProvider, { TableContext } from "components/table/context";
import ActionsRow, { ActionsRowProps } from "components/table/actions-row";
import { data } from "autoprefixer";

type TableProps<T> = {
    children: React.ReactNode;
    borders?: boolean;
    height?: number;
    data?:T[]
} & PaginationProps &
    MetaRowProps;

type PaginationProps = {
    currentPage?: number;
    setCurrentPage?: (value: number) => void;
    totalElements?: number;
};

const Table = <T extends {}>({
    children,
    title,
    borders = true,
    height = undefined,
    currentPage,
    setCurrentPage,
    totalElements,
    data
}: TableProps<T>) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const metaProps: MetaRowProps = {
        title: title!,
        totalElements: totalElements!,
    };

    const { setTableData } = useContext(TableContext);

    console.log("Table render")

    useEffect(() => {
        setTableData(data||[]);
    }, [data, setTableData]);
    return (
        <div
            className={`${styles.Table}
             ${borders ? styles.borders : ""}
             ${borders ? styles.radius : ""}
             ${height ? "h" + height + "p" : styles.defaultHeight}
             `}
        >
            {title && <MetaRow {...metaProps} />}
            <table className={styles.table}>{children}</table>
            {setCurrentPage && (
                <div className={styles.pagination}>
                    <Pagination
                        total={Math.ceil((totalElements || 20) / 20)}
                        size={"xs"}
                        siblings={0}
                        value={
                            parseInt(searchParams.get("page") || "") ||
                            currentPage ||
                            1
                        }
                        onChange={(value) => {
                            if (setCurrentPage) {
                                setCurrentPage(value);
                            }
                            searchParams.set("page", String(value));
                            setSearchParams(searchParams);
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default (props: TableProps<any>) => (
    <TableContextProvider>
        <Table {...props} />
    </TableContextProvider>
);
