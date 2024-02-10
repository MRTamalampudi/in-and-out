import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SplitBillGroupMemberQueryKeys } from "service/react-query-hooks/query-keys";
import { SplitBillGroupMemberService } from "service/split-bill-group-member.service";
import {
    useConstructSearchParams,
    useUpdateSearchParams,
} from "service/react-query-hooks/base.query";

export function useIndexGroupMembers (
    pagination: PaginationState,
    filters: ColumnFiltersState,
    sorting: SortingState,
) {
    const keys = useConstructSearchParams({ pagination, filters, sorting })
    keys["gpage"]=keys.page;
    keys["gsize"]=keys.size;
    useUpdateSearchParams({ keys,omit:["page","size","forGroupsList"] });
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: [SplitBillGroupMemberQueryKeys.index, keys],
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
