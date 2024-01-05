import {
    DefaultError,
    MutationOptions,
    queryOptions,
    useMutation,
    useMutationState,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import {
    createTransaction,
    deleteTransaction,
    indexTransactions,
} from "service/transaction.service";
import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import { CustomMutationOptions } from "service/react-query-hooks/react-query";

const TRANSACTIONS = "transactions";

export function useIndexTransactions(
    page: PaginationState,
    filters: ColumnFiltersState,
    sorting: SortingState,
) {
    console.log("index transactionsss");
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: [TRANSACTIONS, page, filters, sorting],
        queryFn: () => indexTransactions(page, filters, sorting),
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

export function useDeleteTransaction(options: CustomMutationOptions) {
    const { onSuccess,onError } = options;
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: [TRANSACTIONS, "delete"],
        mutationFn: deleteTransaction,
        onError:()=>{
            if (onError) onError();
        },
        onSuccess: () => {
            onSuccess && onSuccess();
            queryClient.invalidateQueries({ queryKey: [TRANSACTIONS] });
        },
    });
}
