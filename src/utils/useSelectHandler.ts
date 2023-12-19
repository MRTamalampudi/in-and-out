import { useCallback, useContext } from "react";
import { TableContext } from "components/table/context";

export function useSelectHandler<T extends { id: number }>(
): (entity: T, checked: boolean) => void {
    const {selectionList,setSelectionList} = useContext(TableContext);
    return  useCallback((entity:T,checked:boolean)=>{
        const index: number = selectionList.findIndex(
            (data) => data.id == entity.id,
        );
        if (checked) {
            setSelectionList((prevState)=> [...prevState,entity])
        } else {
            if (index > -1) {
                const updatedList = [
                    ...selectionList.slice(0, index),
                    ...selectionList.slice(index + 1),
                ];
                setSelectionList(updatedList);
            }
        }
    },[selectionList])
}

export function useSelectAllHandler<T extends { id: number }>(): (
    checked: boolean,
) => void {
    const { tableData, selectionList, setSelectionList } =
        useContext(TableContext);
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
