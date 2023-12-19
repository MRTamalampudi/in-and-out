import styles from "./table.module.scss";
import { Checkbox, Tooltip } from "@mantine/core";
import React, { memo, useContext, useMemo } from "react";
import { TableContext } from "components/table/context";

export type ActionsRowProps = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    actions?: Action[];
};

export type Action = {
    label: string;
    component: () => React.ReactNode;
};

function ActionsRow({
    onChange,
    actions,
}: ActionsRowProps) {
    const { selectionList, tableData } = useContext(TableContext);
    const entireDataSelected: boolean = useMemo(
        () => selectionList.length == tableData.length,
        [selectionList, tableData],
    );
    return (
        <tr className={styles.actionRow}>
            <th>
                <Checkbox
                    checked={entireDataSelected}
                    size={"xs"}
                    onChange={onChange}
                    indeterminate={!entireDataSelected}
                />
            </th>
            <th className={"flex-basis-19/20"}>
                {`${selectionList.length} selected`}
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
    );
}

export default memo(ActionsRow);
