import {useState} from "react";

export const useTableEssentials = <T extends {id:number}> () => {
    const currentPageState= useCurrentPage();
    const selectionListState = useSelectionList<T>();

    return {
        currentPageState,
        selectionListState,
    }
}

const useCurrentPage = () => {
    const [currentPage,setCurrentPage] = useState<number>(1);

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