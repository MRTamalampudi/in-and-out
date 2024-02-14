import TransactionsPage from "./transactions.page";
import { createRoute } from "@tanstack/react-router";
import { z } from "zod";
import { transactionQueryOptions } from "service/react-query-hooks/transaction-query";
import { rootRoute } from "index";
import { transactionSummaryQueryOptions } from "service/react-query-hooks/transaction-summary.query";
import page from "model/page";


export const TRANSACTIONS_SLUGS = {
    TRANSACTION_ID:"transactionId",
}

const searchParamsSchema = z.object({
    transaction:z.number().optional(),
    page:z.number().default(1).catch(1),
    size:z.number().default(20).catch(20),
    q:z.string().default("").catch("").optional(),
})

export const transactionRoute = createRoute({
    getParentRoute:()=>rootRoute,
    component:TransactionsPage,
    path:"transactions",
    validateSearch:searchParamsSchema,
    loaderDeps:({search})=>search,
    loader: ({context:{queryClient},deps:search})=>{
        queryClient.ensureQueryData(transactionQueryOptions({ ...search }));
        queryClient.ensureQueryData(transactionSummaryQueryOptions)
    },
    pendingComponent:()=><div>Loading...</div>,
});