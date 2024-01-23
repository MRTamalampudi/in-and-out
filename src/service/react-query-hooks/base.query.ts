import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import { useSearchParams } from "react-router-dom";
import { useUpdateSearchParams } from "utils/useUpdateSearchParams";
import { useEffect } from "react";

type ConstructSearchParamOptions = {
    pagination?: PaginationState;
    filters?: ColumnFiltersState;
    sorting?: SortingState;
};

export function constructSearchParams(options: ConstructSearchParamOptions) {
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

    const keys: Record<string, string> = {
        page:String(pagination?.pageIndex) ?? "1",
        size:String(pagination?.pageSize) ?? "20",
        ...filterKeys,
        ...sortingKeys,
    };

    return keys;
}

type ConstructSearchParamsHookProps = ConstructSearchParamOptions;

export const useConstructSearchParams = (options: ConstructSearchParamsHookProps) => {
    const { pagination, filters, sorting } = options;
    const keys = constructSearchParams({ pagination, filters, sorting });
    const [searchParams, setSearchParams] = useSearchParams();
    const [update, clean] = useUpdateSearchParams();

    useEffect(() => {
        update(searchParams, keys);
        setSearchParams(searchParams);
        return () => clean(searchParams, keys);
    }, [pagination, filters, sorting, searchParams]);

    return { keys, searchParams };
};
