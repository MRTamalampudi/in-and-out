import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import {
    useConstructSearchParams,
} from "service/react-query-hooks/base.query";
import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    QueryKeys,
    SplitBillGroupQueryKeys,
} from "service/react-query-hooks/query-keys";
import { SplitBillGroupService } from "service/split-bill-group.service";
import { SplitBillGroup } from "model";
import { CustomMutationOptions } from "service/react-query-hooks/react-query";


export function useIndexGroups(
    pagination: PaginationState,
    filters: ColumnFiltersState,
    sorting: SortingState,
) {
    const keys = useConstructSearchParams({ pagination, filters, sorting });
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: SplitBillGroupQueryKeys.index(keys),
        queryFn: () =>
            SplitBillGroupService.getInstance().index(
                {}
            ),
        placeholderData: () =>
            queryClient.getQueryData(SplitBillGroupQueryKeys.index(keys)),
    });
}



export function useGetSplitBillGroup(id: number) {
    const {queryKey,queryFn}=getGroupQueryOptions(id);
    return useQuery({
        queryKey,
        queryFn,
        retry: 1,
    });
}

export function useCreateSplitBillGroup(options: CustomMutationOptions) {
    const { onSuccess, onError } = options;
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data:SplitBillGroup)=>SplitBillGroupService.getInstance().create(data),
        onSuccess: () => {
            onSuccess && onSuccess();
            queryClient.invalidateQueries({ queryKey: [QueryKeys.SPLIT_BILL_GROUP] });
        },
    });
}

export function getGroupQueryOptions(groupId:number) {
    return queryOptions({
        queryKey:[QueryKeys.SPLIT_BILL_GROUP,groupId],
        queryFn:(id)=>SplitBillGroupService.getInstance().get(groupId)
    })

}