import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SplitBillGroupMemberQueryKeys } from "service/react-query-hooks/query-keys";
import { SplitBillGroupMemberService } from "service/split-bill-group-member.service";
import { useConstructSearchParams } from "service/react-query-hooks/base.query";

export function useIndexGroupMembers(
    pagination: PaginationState,
    filters: ColumnFiltersState,
    sorting: SortingState,
) {
    const keys = useConstructSearchParams({ pagination, filters, sorting });
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: [SplitBillGroupMemberQueryKeys.index, keys],
        queryFn: () =>
            SplitBillGroupMemberService.getInstance().index(
                {}
            ),
        placeholderData: () =>
            queryClient.getQueryData(SplitBillGroupMemberQueryKeys.index),
    });
}
