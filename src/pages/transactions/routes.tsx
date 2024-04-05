import { createRoute } from "@tanstack/react-router";
import { boolean, z } from "zod";
import { transactionQueryOptions } from "service/react-query-hooks/transaction-query";
import { appRoute, rootRoute } from "index";
import { transactionSummaryQueryOptions } from "service/react-query-hooks/transaction-summary.query";
import { userQueryOptions } from "service/react-query-hooks/user.query";

export const TRANSACTIONS_SLUGS = {
    TRANSACTION_ID: "transactionId",
};

const searchParamsSchema = z.object({
    transaction:z.number().optional(),
    page:z.number().default(1).catch(1),
    size:z.number().default(20).catch(20),
    q:z.string().default("").catch("").optional(),
    addNew:boolean().default(false).catch(false).optional(),
})

export const transactionRoute = createRoute({
    getParentRoute:()=>appRoute,
    path:"transactions",
    validateSearch:searchParamsSchema,
    beforeLoad: ({ context: { queryClient }, navigate }) => {
        if (!queryClient.getQueryData(userQueryOptions().queryKey)) {
            queryClient
                .ensureQueryData(userQueryOptions())
                .catch(() => navigate({ to: "/login" }));
        }
    },
    loaderDeps:({search:{transaction,...search}})=>search,
    loader: ({context:{queryClient},deps:search})=>{
        queryClient.ensureQueryData(transactionQueryOptions({ ...search }));
        queryClient.ensureQueryData(transactionSummaryQueryOptions)
    },
    pendingComponent:()=><div>Loading...</div>,
}).lazy(()=>import("./transactions.page").then((d)=>d.TransactionLazyRoute))