import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import { useSearchParams } from "react-router-dom";
import { useUpdateSearchParams } from "utils/useUpdateSearchParams";
import { useEffect, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SplitBillGroupMemberQueryKeys } from "service/react-query-hooks/query-keys";
import { SplitBillGroupMemberService } from "service/split-bill-group-member.service";
import {
    constructSearchParams,
    useConstructSearchParams,
} from "service/react-query-hooks/base.query";

export function useIndexGroupMembers(
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
        queryKey: [SplitBillGroupMemberQueryKeys.index,filters],
        queryFn: () =>
            SplitBillGroupMemberService.getInstance().index(
                pagination,
                filters,
                sorting,
            ),
        placeholderData: () =>
            queryClient.getQueryData(SplitBillGroupMemberQueryKeys.index),
    });
}
