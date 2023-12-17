import React, { createContext, Dispatch, SetStateAction, useState } from "react";

type TableContextType<T> = {
    selectionList:T[],
    setSelectionList:Dispatch<SetStateAction<T[]>>
}

const defaultValues = {
    selectionList: [],
    setSelectionList: () => {},
} as TableContextType<any>;

export const TableContext = createContext<TableContextType<any>>(defaultValues)


function TableContextProvider<T>({children}:{children:React.ReactNode}){
    const [selectionList,setSelectionList] = useState<T[]>([]);

    return (
        <TableContext.Provider value={{selectionList,setSelectionList} as TableContextType<T>}>
            {children}
        </TableContext.Provider>
    )
}

export default TableContextProvider;