import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import { useSearchParams } from "react-router-dom";
import { updateSearchParams } from "utils/updateSearchParams";
import { useEffect, useMemo } from "react";

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

type ConstructSearchParamsHookProps = ConstructSearchParamOptions;

type UpdateSearchParamsOptions = {
    keys:Record<string, string>;
    omit?:string[];
    pick?:string[];
}

export const useUpdateSearchParams = (options:UpdateSearchParamsOptions) => {
    const {keys} = options;
    const [searchParams, setSearchParams] = useSearchParams();
    const [update, clean] = updateSearchParams({searchParams,...options});

    useEffect(() => {
        update();
        setSearchParams(searchParams);
        return () => clean();
    }, [keys, searchParams]);

    return { keys, searchParams };
};
