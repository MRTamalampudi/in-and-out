import { queryOptions, useQuery } from "@tanstack/react-query";
import { QueryKeys } from "service/react-query-hooks/query-keys";
import { getTransactionSummary } from "service/transaction-summary.service";
import { getUser } from "service/user.service";

export function useGetUser() {
    const {queryKey,queryFn} = userQueryOptions();
    return useQuery({
        queryKey,
        queryFn,
    })
}

export function userQueryOptions(){
    return queryOptions({
        queryKey:[QueryKeys.USER],
        queryFn: ()=>getUser()
    })
}