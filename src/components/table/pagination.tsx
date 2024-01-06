import { Button, Select } from "@mantine/core";
import React, { memo } from "react";
import styles from "components/table/table.module.scss";
import { PaginationState } from "@tanstack/react-table";

type PaginationProps = {
    totalElements: number;
    onPaginationChange: (value: PaginationState) => void;
    pagination: PaginationState;
};

function Pagination_(props: PaginationProps) {
    const FIRST_PAGE = 1;

    const { totalElements, pagination:{pageIndex,pageSize}, onPaginationChange } = props;
    const TOTAL_PAGES = Math.ceil((totalElements || 20) / pageSize) || 1;
    const LAST_PAGE = TOTAL_PAGES;

    function setPageSize(size: string | null) {
        onPaginationChange({ pageIndex: 1, pageSize: parseInt(size || "20") });
    }

    function setPageIndex(pageIndexUpdater: () => number) {
        let index: number = pageIndexUpdater();
        index = Math.max(FIRST_PAGE, Math.min(index, LAST_PAGE));
        onPaginationChange({ pageIndex: index, pageSize });
    }

    return (
        <div className={styles.pagination}>
            <div className={styles.left}>
                <span>page size:</span>
                <div className={styles.select}>
                    <Select
                        data={["10", "20", "30", "50", "100"]}
                        value={pageSize.toString()}
                        variant={"subtle"}
                        onChange={setPageSize}
                    />
                </div>
            </div>
            <div className={styles.center}>
                <Button
                    onClick={() => setPageIndex(() => FIRST_PAGE)}
                    size={"compact-xs"}
                    variant={"subtle"}
                    disabled={pageIndex == FIRST_PAGE}
                >
                    {"<<"}
                </Button>
                <Button
                    onClick={() => setPageIndex(() => pageIndex - 1)}
                    size={"compact-xs"}
                    disabled={pageIndex == FIRST_PAGE}
                >
                    {"<"}
                </Button>
                <span>{`page ${pageIndex} of ${TOTAL_PAGES}`}</span>
                <Button
                    onClick={() => setPageIndex(() => pageIndex + 1)}
                    size={"compact-xs"}
                    disabled={pageIndex == LAST_PAGE}
                >
                    {">"}
                </Button>
                <Button
                    onClick={() => setPageIndex(() => LAST_PAGE)}
                    size={"compact-xs"}
                    variant={"subtle"}
                    disabled={pageIndex == LAST_PAGE}
                >
                    {">>"}
                </Button>
            </div>
            <div>{""}</div>
        </div>
    );
}

export default memo(Pagination_);
