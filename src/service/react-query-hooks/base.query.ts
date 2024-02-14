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

type PaginationOptions = {
    page:number,
    size:number
}

type SortingOptions = {
    sort?:string
}

type SearchOptions = {
    q?:string
}

export type BasicIndexOptions = PaginationOptions & SortingOptions & SearchOptions;