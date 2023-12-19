import { useCallback, useContext } from "react";
import { TableContext } from "components/table/context";

export function selectionHandler<T extends { id: number }>(
    selectionList: T[],
    entity: T,
    chekced: boolean,
): T[] {
    const index: number = selectionList.findIndex(
        (data, index) => data.id == entity.id,
    );
    if (chekced) {
        return [...selectionList, entity];
    } else {
        if (index > -1) {
            selectionList.splice(index, 1);
            return [...selectionList];
        } else {
            return selectionList;
        }
    }
}

export function useSelectAllHandler<T extends { id: number }>(): (
    checked: boolean,
) => void {
    const { tableData, selectionList, setSelectionList } =
        useContext(TableContext);
    console.log("outside selectall", tableData);
    return useCallback(
        (checked: boolean) => {
            if (checked) {
                tableData?.map((data1) => {
                    if (!selectionList.includes(data1)) {
                        setSelectionList((prevState) => [...prevState, data1]);
                    }
                });
            } else {
                setSelectionList((prevState) => []);
            }
        },
        [selectionList, setSelectionList, tableData],
    );
}
