import { ColumnFiltersState, PaginationState, SortingState } from "@tanstack/react-table";
import { useMemo } from "react";
import { constructSearchParams, useConstructSearchParams } from "service/react-query-hooks/base.query";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SplitBillGroupQueryKeys, SplitBillQueryKeys } from "service/react-query-hooks/query-keys";
import { SplitBillGroupService } from "service/split-bill-group.service";
import { SplitBillService } from "service/split-bill.service";

export function useIndexBills(
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
        queryKey: SplitBillQueryKeys.index,
        queryFn: () =>
            SplitBillService.getInstance().index(
                pagination,
                filters,
                sorting,
            ),
        placeholderData: () =>
            queryClient.getQueryData(SplitBillQueryKeys.index),
    });
}