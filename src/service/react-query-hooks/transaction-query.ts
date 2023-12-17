import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    createTransaction,
    deleteTransaction,
    indexTransactions,
} from "service/transaction.service";

const TRANSACTIONS = "transactions";

export function useIndexTransactions(page:number) {
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: [TRANSACTIONS, page],
        queryFn: () => indexTransactions(page),
        placeholderData: () => queryClient.getQueryData([TRANSACTIONS, page]),
        staleTime: 10000,
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