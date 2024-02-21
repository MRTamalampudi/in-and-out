import SplitBillPage from "./split-bill.page";
import { createRoute } from "@tanstack/react-router";
import { z } from "zod";
import { appRoute, rootRoute } from "index";
import { memberIndexQueryOptions } from "service/react-query-hooks/split_bill_group_member.query";
import { shareIndexQueryOptions } from "service/react-query-hooks/split-bill-share.query";
import { getGroupQueryOptions } from "service/react-query-hooks/split-bill-group.query";
import { userQueryOptions } from "service/react-query-hooks/user.query";
import { use } from "i18next";

export const SPLITBILL_ROUTES = {
    SPLITBILL_GROUP_ID: "splitBillGroupId",
    GROUPS: "groups",
    BILLS: "bills",
    BILL_ID: "billId",
};

const searchParamsSchema = z.object({
    page: z.number().catch(1),
    gpage: z.number().catch(1),
    size: z.number().catch(1),
    gsize: z.number().catch(1),
    group: z.number().default(0).catch(0).optional(),
    bill: z.number().optional(),
    newGroup: z.boolean().catch(false).optional(),
    newBill: z.boolean().catch(false).optional(),
});

export const splitBillRoute = createRoute({
    getParentRoute: () => appRoute,
    component: SplitBillPage,
    path: "split_bill",
    validateSearch: searchParamsSchema,
    pendingComponent: () => <div>Loadingg</div>,
    loaderDeps: ({ search }) => search,
    beforeLoad: ({ context: { queryClient }, navigate }) => {
        if (!queryClient.getQueryData(userQueryOptions().queryKey)) {
            queryClient
                .ensureQueryData(userQueryOptions())
                .catch(() => navigate({ to: "/login" }));
        }
    },
    loader: ({
        context: { queryClient },
        deps: { bill, group, ...search },
    }) => {
        queryClient.ensureQueryData(memberIndexQueryOptions(search));
        queryClient.ensureQueryData(
            shareIndexQueryOptions({ ...search, group: group || 0 }),
        );
        queryClient.ensureQueryData(getGroupQueryOptions(group || 0));
    },
});
