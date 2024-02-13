import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import { useMemo } from "react";

type ConstructSearchParamOptions = {
    pagination?: PaginationState;
    filters?: ColumnFiltersState;
    sorting?: SortingState;
};

export function useConstructSearchParams(options: ConstructSearchParamOptions) {
    const { pagination, filters, sorting } = options;

    const filterKeys = filters?.reduce(
        (acc, value) => ({ ...acc, ...{ [value.id]: value.value } }),
        {},
    );
    const sortingKeys = sorting?.reduce(
        (acc, value) => ({
            ...acc,
            ...{ sort: `${value.id},${value.desc ? "desc" : "asc"}` },
        }),
        {},
    );

    return useMemo(() => ({
        page: String(pagination?.pageIndex) ?? "1",
        size: String(pagination?.pageSize) ?? "20",
        ...filterKeys,
        ...sortingKeys,
    }), [pagination, filters, sorting]) as Record<string, string>;
}

type UpdateSearchParamsOptions = {
    keys:Record<string, string>;
    omit?:string[];
    pick?:string[];
};

export const useUpdateSearchParams = (options:UpdateSearchParamsOptions) => {
    // const {keys,pick,omit} = options;
    // const [searchParams, setSearchParams] = useSearchParams();
    //
    // const updateSearchParams = useCallback(()=> {
    //     Object.entries(keys).map((value) => {
    //         if (!!omit) {
    //             if(!omit.includes(value[0])){
    //                 searchParams.set(value[0], value[1]);
    //             }
    //         } else if (!!pick) {
    //             pick.includes(value[0]) && searchParams.set(value[0], value[1]);
    //         } else {
    //             setSearchParams(prev => {
    //                 prev.set(value[0], value[1]);
    //                 return prev
    //             });
    //         }
    //     });
    // },[keys,searchParams]) ;
    //
    // const cleanUpParams = useCallback(() => {
    //     Object.entries(keys).forEach((value) => searchParams.delete(value[0]));
    // },[keys,searchParams]);
    //
    // useEffect(() => {
    //     updateSearchParams()
    //     return () => cleanUpParams();
    // }, [searchParams,keys]);
};
