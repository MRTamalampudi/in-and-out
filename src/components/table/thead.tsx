import React, { memo, useCallback, useContext, useEffect } from "react";
import { Checkbox } from "@mantine/core";
import { useSelectAllHandler } from "utils/selectionHandler";
import { TableContext } from "components/table/context";
import ActionsRow, { ActionsRowProps } from "components/table/actions-row";

type TheadProps<T extends { id: number }> = {
    children: React.ReactNode;
    checkBox?: boolean;
    onSelectionListChange?: (entities: T[]) => void;
} & Omit<ActionsRowProps, "checked">;

function Thead<T extends { id: number }>({
    children,
    actions,
    checkBox = true,
    onSelectionListChange,
}: TheadProps<T>) {

    console.log("theadd")

    const selectALlHandler = useSelectAllHandler()
    function handleSelection(event: React.ChangeEvent<HTMLInputElement>) {
        selectALlHandler(event.target.checked);
    }

    const { selectionList } = useContext(TableContext);

    useEffect(() => {
        console.log("inside thead useEffect")
        onSelectionListChange && onSelectionListChange(selectionList);
    }, [selectionList]);

    const renderCheckBox = useCallback(()=> {
        return (
            <>
                {checkBox && (
                    <td>
                        <Checkbox size={"xs"} onChange={handleSelection} />
                    </td>
                )}
            </>
        );
    },[checkBox,handleSelection])

    return (
        <thead>
            {selectionList.length ? (
                <ActionsRow
                    actions={actions}
                    onChange={handleSelection}
                />
            ) : (
                <tr>
                    {renderCheckBox()}
                    {children}
                    <td className={"flex-basis-1/20"}></td>
                </tr>
            )}
        </thead>
    );
}

export default memo(Thead) as typeof Thead;
