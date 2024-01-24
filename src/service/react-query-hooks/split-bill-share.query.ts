import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import { useMemo } from "react";
import {
    constructSearchParams,
    useConstructSearchParams,
} from "service/react-query-hooks/base.query";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SplitBillShareQueryKeys } from "service/react-query-hooks/query-keys";
import { SplitBillShareService } from "service/split-bill-share.service";

export function useIndexBillShare(
    pagination: PaginationState,
    filters: ColumnFiltersState,
    sorting: SortingState,
) {
    const keys = useMemo(
        () => constructSearchParams({ pagination, filters, sorting }),
        [pagination, filters, sorting],
    );
    useConstructSearchParams({ pagination, filters, sorting });
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: SplitBillShareQueryKeys.index,
        queryFn: () =>
            SplitBillShareService.getInstance().index(
                pagination,
                filters,
                sorting,
            ),
        placeholderData: () =>
            queryClient.getQueryData(SplitBillShareQueryKeys.index),
    });
}