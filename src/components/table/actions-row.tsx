import styles from "./table.module.scss";
import { Checkbox, Tooltip } from "@mantine/core";
import React, { memo, useContext, useMemo } from "react";
import { TableContext } from "components/table/context";
import { Table } from "@tanstack/react-table";

export type ActionsRowProps<T> = {
    table: Table<T>;
    actions?: Action[];
};

export type Action = {
    label: string;
    component: () => React.ReactNode;
};

function ActionsRow<T>({ table, actions }: ActionsRowProps<T>) {

    function renderRow() {
        return (<thead>
        <tr className={styles.actionRow}>
            <th>
                <Checkbox
                    checked={table.getIsAllRowsSelected()}
                    size={"xs"}
                    onChange={(event) =>
                        table.toggleAllRowsSelected(event?.target.checked)
                    }
                    indeterminate={table.getIsSomeRowsSelected()}
                />
            </th>
            <th className={"flex-basis-19/20"}>
                {`${
                    table.getFilteredSelectedRowModel().rows.length
                } selected`}
            </th>
            <th className={`flex-basis-1/20 ${styles.actions}`}>
                {actions?.map((action) => {
                    return (
                        <div key={action.label}>
                            <Tooltip label={action.label} position={"top"}>
                                {action.component()}
                            </Tooltip>
                        </div>
                    );
                })}
            </th>
        </tr>
        </thead>)
    }

    return (
        (table.getIsSomeRowsSelected() ||
                table.getIsAllRowsSelected()) ? renderRow() : null
    )
}

export default ActionsRow;
