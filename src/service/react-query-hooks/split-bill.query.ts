import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import { useConstructSearchParams } from "service/react-query-hooks/base.query";
import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    QueryKeys,
    SplitBillQueryKeys,
} from "service/react-query-hooks/query-keys";
import { SplitBillService } from "service/split-bill.service";
import { CustomMutationOptions } from "service/react-query-hooks/react-query";
import { SplitBill } from "model";
import { getGroupQueryOptions } from "service/react-query-hooks/split-bill-group.query";
import { SplitBillGroupService } from "service/split-bill-group.service";

export function useIndexBills(
    pagination: PaginationState,
    filters: ColumnFiltersState,
    sorting: SortingState,
) {
    const keys = useConstructSearchParams({ pagination, filters, sorting });
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: SplitBillQueryKeys.index(keys),
        queryFn: () =>
            SplitBillService.getInstance().index({}),
        placeholderData: () =>
            queryClient.getQueryData(SplitBillQueryKeys.index(keys)),
    });
}

export function useCreateSplitBill(options: CustomMutationOptions) {
    const { onSuccess } = options;
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (bill: SplitBill) =>
            SplitBillService.getInstance().create(bill),
        onSuccess: () => {
            onSuccess && onSuccess();
            queryClient.invalidateQueries({ queryKey: [QueryKeys.SPLIT_BILL] });
            queryClient.invalidateQueries({
                queryKey: [QueryKeys.SPLIT_BILL_GROUP],
            });
            queryClient.invalidateQueries({
                queryKey: [QueryKeys.TRANSACTION_SUMMARY],
            });
        },
    });
}

export function useGetSplitBill(id: number) {
    const {queryKey,queryFn} = getBillQueryOptions(id);
    return useQuery({
        queryKey,
        queryFn,
        retry: 1,
    });
}

export function getBillQueryOptions(billId:number) {
    return queryOptions({
        queryKey:[QueryKeys.SPLIT_BILL_GROUP,billId],
        queryFn:(id)=>SplitBillService.getInstance().get(billId)
    })
}
