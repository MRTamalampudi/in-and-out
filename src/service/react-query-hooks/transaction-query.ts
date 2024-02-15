import {
    queryOptions,
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import { TransactionService } from "service/transaction.service";
import { CustomMutationOptions } from "service/react-query-hooks/react-query";
import { QueryKeys } from "service/react-query-hooks/query-keys";
import { Transaction } from "model";
import Page from "model/page";
import { BasicIndexOptions } from "service/react-query-hooks/base.query";
import { transactionRoute } from "pages/transactions/routes";

type IndexOptions = {
    q?: string;
} & BasicIndexOptions;

export function useIndexTransactions(
    options:IndexOptions
) {
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: [QueryKeys.TRANSACTIONS, options],
        queryFn: () =>
            TransactionService.getInstance().index(
                {...options}
            ),
        placeholderData: () =>
            queryClient.getQueryData([QueryKeys.TRANSACTIONS, options]),
    });
}

export function useGetTransaction(id: number) {
    const client = useQueryClient();
    const { page, size } = transactionRoute.useSearch();
    const filterById = (entity: Transaction) =>
        entity.id.toString() == id.toString();
    return useQuery({
        queryKey: [QueryKeys.TRANSACTIONS, id],
        queryFn: () => TransactionService.getInstance().get(id),
        placeholderData: () =>
            (
                client.getQueryData([
                    QueryKeys.TRANSACTIONS,
                    { page, size },
                ]) as unknown as Page<Transaction>
            )?.content
                .filter(filterById)
                .at(0),
        retry: 1,
    });
}

export function useCreateTransaction(options: CustomMutationOptions) {
    const { onSuccess } = options;
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (transaction: Transaction) =>
            TransactionService.getInstance().create(transaction),
        onSuccess: () => {
            onSuccess && onSuccess();
            queryClient.invalidateQueries({
                queryKey: [QueryKeys.TRANSACTIONS],
            });
            queryClient.invalidateQueries({
                queryKey: [QueryKeys.TRANSACTION_SUMMARY],
            });
        },
    });
}

export function useDeleteTransaction(options: CustomMutationOptions) {
    const { onSuccess, onError } = options;
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: [QueryKeys.TRANSACTIONS, "delete"],
        mutationFn: (entityIds: number[]) =>
            TransactionService.getInstance().delete(entityIds),
        onError: () => {
            if (onError) onError();
        },
        onSuccess: () => {
            onSuccess && onSuccess();
            queryClient.invalidateQueries({
                queryKey: [QueryKeys.TRANSACTIONS],
            });
        },
    });
}

export function useUpdateTransaction(options: CustomMutationOptions) {
    const { onSuccess } = options;
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (transaction: Transaction) =>
            TransactionService.getInstance().update(transaction),
        onSuccess: () => {
            onSuccess && onSuccess();
            queryClient.invalidateQueries({
                queryKey: [QueryKeys.TRANSACTIONS],
            });
            queryClient.invalidateQueries({
                queryKey: [QueryKeys.TRANSACTION_SUMMARY],
            });
        },
    });
}

export const transactionQueryOptions = (options: IndexOptions) =>
    queryOptions({
        queryKey: [QueryKeys.TRANSACTIONS, { ...options }],
        queryFn: () =>
            TransactionService.getInstance().index({
                ...options,
            }),
    });
