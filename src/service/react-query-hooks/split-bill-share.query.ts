import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import { useConstructSearchParams } from "service/react-query-hooks/base.query";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SplitBillShareQueryKeys } from "service/react-query-hooks/query-keys";
import { SplitBillShareService } from "service/split-bill-share.service";
import { useSearch } from "@tanstack/react-router";

export function useIndexBillShare(
    pagination: PaginationState,
    filters: ColumnFiltersState,
    sorting: SortingState,
) {
    const {} = useSearch({ from: "/split_bill" });
    const keys = useConstructSearchParams({ pagination, filters, sorting });
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: SplitBillShareQueryKeys.index(keys),
        queryFn: () =>
            SplitBillShareService.getInstance().index(
                {}
            ),
        placeholderData: () =>
            queryClient.getQueryData(SplitBillShareQueryKeys.index(keys)),
    });
}