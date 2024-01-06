import { useQuery } from "@tanstack/react-query";
import { getTransactionSummary } from "service/transaction-summary.service";
import { QueryKeys } from "service/react-query-hooks/query-keys";

export function useGetTransactionSummary(){
    return useQuery({
        queryKey:[QueryKeys.TRANSACTION_SUMMARY],
        queryFn: ()=>getTransactionSummary()
    })
}