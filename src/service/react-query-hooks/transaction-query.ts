import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    createTransaction,
    deleteTransaction,
    indexTransactions,
} from "service/transaction.service";

const TRANSACTIONS = "transactions";

export function useIndexTransactions(page:number,note:string) {
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: [TRANSACTIONS, page,note],
        queryFn: () => indexTransactions(page,note),
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

export function useDeleteTransaction(transactionId:number) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: [TRANSACTIONS,"delete",transactionId],
        mutationFn: deleteTransaction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [TRANSACTIONS] });
        },
    });
}