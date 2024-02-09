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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    QueryKeys,
    SplitBillGroupQueryKeys,
    SplitBillQueryKeys,
} from "service/react-query-hooks/query-keys";
import { SplitBillGroupService } from "service/split-bill-group.service";
import { SplitBillService } from "service/split-bill.service";
import { CustomMutationOptions } from "service/react-query-hooks/react-query";
import { SplitBill, Transaction } from "model";
import { TransactionService } from "service/transaction.service";

export function useIndexBills(
    pagination: PaginationState,
    filters: ColumnFiltersState,
    sorting: SortingState,
) {
    const keys = useConstructSearchParams({ pagination, filters, sorting });
    useUpdateSearchParams({ keys });
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: SplitBillQueryKeys.index(keys),
        queryFn: () =>
            SplitBillService.getInstance().index(pagination, filters, sorting),
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
