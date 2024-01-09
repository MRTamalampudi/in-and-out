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
import { QueryKeys } from "service/react-query-hooks/query-keys";
import { toast } from "sonner";
import Checked from "components/icons/checked";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useUpdateSearchParams } from "utils/useUpdateSearchParams";

const TRANSACTIONS = QueryKeys.TRANSACTIONS;

export function useIndexTransactions(
    page: PaginationState,
    filters: ColumnFiltersState,
    sorting: SortingState,
) {
    const keys = {
        page:page.pageIndex.toString(),
        size:page.pageSize.toString(),
        ...filters.reduce(
            (acc, value) => ({ ...acc, ...{ [value.id]: value.value } }),
            {},
        ),
        ...sorting.reduce(
            (acc, value) => ({
                ...acc,
                ...{ sort: `${value.id},${value.desc ? "desc" : "asc"}` },
            }),
            {},
        ),
    };
    const [searchParams, setSearchParams] = useSearchParams();
    const [update,clean] = useUpdateSearchParams()
    useEffect(() => {
        update(searchParams,keys);
        setSearchParams(searchParams);
        return ()=>clean(searchParams,keys);
    }, [page, filters, sorting, searchParams]);



    const queryClient = useQueryClient();
    return useQuery({
        queryKey: [TRANSACTIONS, keys],
        queryFn: () => indexTransactions(page, filters, sorting),
        placeholderData: () => queryClient.getQueryData([TRANSACTIONS, page]),
    });
}

export function useCreateTransaction(options: CustomMutationOptions) {
    const { onSuccess, onError } = options;
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createTransaction,
        onSuccess: () => {
            onSuccess && onSuccess();
            toast("Transaction created", {
                description: "Successfully entered transaction",
                icon: <Checked className={"primary"} />,
            });
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
        mutationFn: deleteTransaction,
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
