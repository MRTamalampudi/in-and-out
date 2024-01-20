import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import { useSearchParams } from "react-router-dom";
import { useUpdateSearchParams } from "utils/useUpdateSearchParams";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SplitBillGroupMemberQueryKeys } from "service/react-query-hooks/query-keys";
import { SplitBillGroupMemberService } from "service/split-bill-group-member.service";

export function useIndexGroupMembers(
    page: PaginationState,
    filters: ColumnFiltersState,
    sorting: SortingState,
) {
    const keys = {
        page: page.pageIndex.toString(),
        size: page.pageSize.toString(),
        ...filters.reduce(
            (acc, value) => ({ ...acc, ...{ [value.id]: value.value } }),
            {},
        ),
        ...sorting.reduce(
            (acc, value) => ({
                ...acc,
                ...{ sort: `${value.id},${value.desc ? "desc" : "asc"}` },
            }),
            {},
        ),
    };

    const [searchParams, setSearchParams] = useSearchParams();
    const [update, clean] = useUpdateSearchParams();
    useEffect(() => {
        update(searchParams, keys);
        setSearchParams(searchParams);
        return () => clean(searchParams, keys);
    }, [page, filters, sorting, searchParams]);

    const queryClient = useQueryClient();
    return useQuery({
        queryKey: SplitBillGroupMemberQueryKeys.index,
        queryFn: () =>
            new SplitBillGroupMemberService().index(page, filters, sorting),
        placeholderData: () =>
            queryClient.getQueryData(SplitBillGroupMemberQueryKeys.index),
    });
}
