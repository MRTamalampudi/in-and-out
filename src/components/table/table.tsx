import React from "react";
import styles from "./table.module.scss";
import { Pagination } from "@mantine/core";
import MetaRow from "./meta-row";
import Page from "model/page";
import { useSearchParams } from "react-router-dom";
import TableContextProvider from "components/table/context";
import ActionsRow from "components/table/actions-row";

type TableProps<T> = {
    children: React.ReactNode;
    borders?: boolean;
    height?: number;
    data?: Page<any>;
} & PaginationProps &
    MetaRowProps;

type PaginationProps = {
    currentPage?: number;
    setCurrentPage?: (value: number) => void;
    totalElements?: number;
};

type MetaRowProps = {
    title?: string;
    totalElements?: number;
};

const Table = <T extends {}>({
    children,
    title,
    borders = true,
    height = undefined,
    totalElements,
    currentPage,
    setCurrentPage,
    data
}: TableProps<T>) => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div
            className={`${styles.Table}
             ${borders ? styles.borders : ""}
             ${borders ? styles.radius : ""}
             ${height ? "h" + height + "p" : styles.defaultHeight}
             `}
        >
            {title && <MetaRow title={title!} totalElements={data?.totalElements!} />}
            <table className={styles.table}>
                <ActionsRow data={[]} checked={false} />
                {children}
            </table>
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
