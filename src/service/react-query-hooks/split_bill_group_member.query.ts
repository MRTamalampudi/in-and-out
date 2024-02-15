import { queryOptions, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    QueryKeys,
    SplitBillGroupMemberQueryKeys,
} from "service/react-query-hooks/query-keys";
import { SplitBillGroupMemberService } from "service/split-bill-group-member.service";
import { BasicIndexOptions } from "service/react-query-hooks/base.query";

type IndexOptions = {
    q?: string;
    gpage?: number;
    gsize?: number;
} & BasicIndexOptions;

export function useIndexGroupMembers(
    options:IndexOptions
) {
    const queryClient = useQueryClient();
    const { queryKey,queryFn } = memberIndexQueryOptions(options);
    return useQuery({
        queryKey,
        queryFn,
        placeholderData: () =>
            queryClient.getQueryData(SplitBillGroupMemberQueryKeys.index),
    });
}


export const memberIndexQueryOptions = (options: IndexOptions) =>{
    options["page"] = options["gpage"];
    options["size"] = options["gsize"];

    delete options["gpage"]
    delete options["gsize"]
    return queryOptions({
        queryKey: [QueryKeys.SPLIT_BILL_GROUP, { ...options }],
        queryFn: () =>
            SplitBillGroupMemberService.getInstance().index({
                ...options,
            }),
    });
}

export function transformSplitBillSearchParams(options:Record<string, any>){
    const {group,bill,newBill,newGroup,...opt} = options;
    return opt
}