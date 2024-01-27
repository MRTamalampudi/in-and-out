import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TransactionService } from "service/transaction.service";
import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import { CustomMutationOptions } from "service/react-query-hooks/react-query";
import {
    QueryKeys,
    TransactionQueryKeys,
} from "service/react-query-hooks/query-keys";
import { useSearchParams } from "react-router-dom";
import { Transaction } from "model";
import Page from "model/page";
import {
    constructSearchParams,
    useConstructSearchParams,
} from "service/react-query-hooks/base.query";

const TRANSACTIONS = QueryKeys.TRANSACTIONS;

export function useIndexTransactions(
    pagination: PaginationState,
    filters: ColumnFiltersState,
    sorting: SortingState,
) {
    const keys = constructSearchParams({ pagination, filters, sorting });
    useConstructSearchParams({ pagination, filters, sorting });
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: [TRANSACTIONS, keys],
        queryFn: () => TransactionService.getInstance().index(pagination, filters, sorting),
        placeholderData: () => queryClient.getQueryData([TRANSACTIONS, keys])
    });
}

export function useGetTransaction(id: number) {
    const client = useQueryClient();
    const filterById = (entity: Transaction) =>
        entity.id.toString() == id.toString();
    return useQuery({
        queryKey: [TRANSACTIONS, id],
        queryFn: () => TransactionService.getInstance().get(id),
        placeholderData: () =>
            (
                client.getQueryData(
                    TransactionQueryKeys.index,
                ) as unknown as Page<Transaction>
            ).content
                .filter(filterById)
                .at(0),
        retry: 1,
    });
}

export function useCreateTransaction(options: CustomMutationOptions) {
    const { onSuccess, onError } = options;
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: TransactionService.getInstance().create,
        onSuccess: () => {
            onSuccess && onSuccess();
            queryClient.invalidateQueries({ queryKey: [TRANSACTIONS] });
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
        mutationKey: [TRANSACTIONS, "delete"],
        mutationFn: TransactionService.getInstance().delete,
        onError: () => {
            if (onError) onError();
        },
        onSuccess: () => {
            onSuccess && onSuccess();
            queryClient.invalidateQueries({ queryKey: [TRANSACTIONS] });
        },
    });
}

export function useIndexTransactionQueryKeys() {
    const [searchParams] = useSearchParams();
    const pagination = {
        pageIndex: searchParams.get("page"),
        pageSize: searchParams.get("size"),
    };
    const filter = { q: searchParams.get("q") };
    const sorting = searchParams
        .get("sort")
        ?.split(",")
        .reduce(
            (acc, value, currentIndex) => {
                if (currentIndex == 0) {
                    acc["id"] = value;
                } else if (currentIndex == 1) {
                    acc["desc"] = Boolean(value);
                }
                return acc;
            },
            { desc: false, id: "" },
        );
    return [TRANSACTIONS, pagination, [filter], [sorting]];
}