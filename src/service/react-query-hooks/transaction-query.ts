import {
    DefaultError,
    MutationOptions, queryOptions,
    useMutation, useMutationState,
    useQuery,
    useQueryClient
} from "@tanstack/react-query";
import {
    createTransaction,
    deleteTransaction,
    indexTransactions,
} from "service/transaction.service";
import { ColumnFiltersState, PaginationState } from "@tanstack/react-table";
import { CustomMutationOptions } from "service/react-query-hooks/react-query";

const TRANSACTIONS = "transactions";

export function useIndexTransactions(page: PaginationState,filters:ColumnFiltersState) {
    console.log("index transactionsss")
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: [TRANSACTIONS, page, filters],
        queryFn: () => indexTransactions(page, filters),
        placeholderData: () => queryClient.getQueryData([TRANSACTIONS, page]),
    });
}

export function useCreateTransaction() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createTransaction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [TRANSACTIONS] });
        },
    });
}

export function useDeleteTransaction(options:CustomMutationOptions) {
    const {onSuccess} = options;
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: [TRANSACTIONS, "delete"],
        mutationFn: deleteTransaction,
        onSuccess: () => {
            onSuccess && onSuccess();
            queryClient.invalidateQueries({ queryKey: [TRANSACTIONS] });
        },
    });
}
