import styles from "./table.module.scss";
import { Checkbox, Tooltip } from "@mantine/core";
import React, { memo, useContext } from "react";
import DeleteConfirmationModal from "components/delete-confirmation-modal";
import { useTransactionsTranslations } from "locales/translation-hooks";
import { ReceiptData } from "components/recipt-bill/receipt-bill";
import { TableContext } from "components/table/context";

type ActionsRowProps = {
    data: unknown[];
    checked: boolean;
    indeterminate?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function ActionsRow({
    data,
    checked,
    indeterminate,
    onChange,
}: ActionsRowProps) {
    const {
        transactions: { TRANSACTIONS },
    } = useTransactionsTranslations();

    return (
        <thead>
            <tr className={styles.actionRow}>
                <th>
                    <Checkbox
                        checked={checked}
                        size={"xs"}
                        onChange={onChange}
                        indeterminate={indeterminate}
                    />
                </th>
                <th className={"flex-basis-19/20"}>
                    {`${data.length} selected`}
                </th>
                <th className={"flex-basis-1/20"}>
                    <Tooltip label={"test"} position={"bottom"}>
                        <div>
                            <DeleteConfirmationModal
                                context={TRANSACTIONS}
                                data={data as unknown as ReceiptData[]}
                            />
                        </div>
                    </Tooltip>
                </th>
            </tr>
        </thead>
    );
}

export default memo(ActionsRow);
