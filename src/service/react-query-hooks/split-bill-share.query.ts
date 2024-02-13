import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import { useMemo } from "react";
import {
    useConstructSearchParams,
    useUpdateSearchParams,
} from "service/react-query-hooks/base.query";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SplitBillShareQueryKeys } from "service/react-query-hooks/query-keys";
import { SplitBillShareService } from "service/split-bill-share.service";
import { useParams, useSearch } from "@tanstack/react-router";

export function useIndexBillShare(
    pagination: PaginationState,
    filters: ColumnFiltersState,
    sorting: SortingState,
) {
    const {  } = useSearch({ from: "/split_bill" });
    const keys = useConstructSearchParams({ pagination, filters, sorting });
    useUpdateSearchParams({ keys });
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: SplitBillShareQueryKeys.index(keys),
        queryFn: () =>
            SplitBillShareService.getInstance().index(
                pagination,
                filters,
                sorting,
            ),
        placeholderData: () =>
            queryClient.getQueryData(SplitBillShareQueryKeys.index(keys)),
    });
}