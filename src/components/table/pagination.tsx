import { Pagination } from "@mantine/core";
import React, { memo } from "react";
import styles from "components/table/table.module.scss";

type PaginationProps = {
    totalElements: number;
    onPageChange: (value: number) => void;
    currentPage: number;
};

function Pagination_({
    totalElements,
    onPageChange,
    currentPage,
}: PaginationProps){

    console.log("Pagination")

    return (
        <div className={styles.pagination}>
            <Pagination
                total={Math.ceil((totalElements || 20) / 20)}
                size={"xs"}
                siblings={1}
                value={currentPage || 1}
                onChange={onPageChange}
            />
        </div>
    )
};

export default memo(Pagination_);
