import { BasicIndexOptions } from "service/react-query-hooks/base.query";
import { queryOptions, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "service/react-query-hooks/query-keys";
import { SplitBillShareService } from "service/split-bill-share.service";

type IndexOptions = {
    q?: string;
    bname?:string;
    gpage?: number;
    gsize?: number;
    group?: number;
    bill?: number;
} & BasicIndexOptions;

export function useIndexBillShare(
    options:IndexOptions
) {
    const {queryKey,queryFn} = shareIndexQueryOptions(options);
    const queryClient = useQueryClient();
    return useQuery({
        queryKey,
        queryFn,
        placeholderData: () =>
            queryClient.getQueryData(shareIndexQueryOptions(options).queryKey),
    });
}

export const shareIndexQueryOptions = (options: IndexOptions) =>{
    delete options["gpage"]
    delete options["gsize"]
    return queryOptions({
        queryKey: [QueryKeys.SPLIT_BILL_SHARE, { ...options }],
        queryFn: () =>
            SplitBillShareService.getInstance().index({
                ...options,
            }),
    });
}