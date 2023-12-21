import { useCallback, useState } from "react";

export const useTableEssentials = <T extends {id:number}> () => {
    const currentPageState= useCurrentPage();
    const selectionListState = useSelectionList<T>();

    return {
        currentPageState,
        selectionListState,
    }
}

const useCurrentPage = () => {
    const [currentPage,setCurrentPage_] = useState<number>(1);

    const setCurrentPage = useCallback(setCurrentPage_,[])

    return {
        currentPage,
        setCurrentPage
    }
}

const useSelectionList = <T extends {id:number}>() => {
    const [selectionList,setSelectionList] = useState<T[]>([]);

    return {
        selectionList,
        setSelectionList
    }
}