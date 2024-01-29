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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    QueryKeys,
    SplitBillGroupQueryKeys,
} from "service/react-query-hooks/query-keys";
import { SplitBillGroupService } from "service/split-bill-group.service";
import { SplitBillGroup } from "model";
import { CustomMutationOptions } from "service/react-query-hooks/react-query";
import { TransactionService } from "service/transaction.service";

export function useIndexGroups(
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
        queryKey: SplitBillGroupQueryKeys.index,
        queryFn: () =>
            SplitBillGroupService.getInstance().index(
                pagination,
                filters,
                sorting,
            ),
        placeholderData: () =>
            queryClient.getQueryData(SplitBillGroupQueryKeys.index),
    });
}

export function useGetSplitBillGroup(id: number) {
    const client = useQueryClient();
    const filterById = (entity: SplitBillGroup) =>
        entity.id.toString() == id.toString();
    return useQuery({
        queryKey: [QueryKeys.SPLIT_BILL_GROUP, id],
        queryFn: () => SplitBillGroupService.getInstance().get(id),
        retry: 1,
    });
}

export function useCreateSplitBillGroup(options: CustomMutationOptions) {
    const { onSuccess, onError } = options;
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data:SplitBillGroup)=>SplitBillGroupService.getInstance().create(data),
        onSuccess: () => {
            onSuccess && onSuccess();
            queryClient.invalidateQueries({ queryKey: SplitBillGroupQueryKeys.index });
        },
    });
}