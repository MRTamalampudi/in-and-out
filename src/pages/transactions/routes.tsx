import TransactionsPage from "./transactions.page";
import { createRoute } from "@tanstack/react-router";
import { z } from "zod";
import { transactionQueryOptions } from "service/react-query-hooks/transaction-query";
import { rootRoute } from "index";
import { transactionSummaryQueryOptions } from "service/react-query-hooks/transaction-summary.query";


export const TRANSACTIONS_SLUGS = {
    TRANSACTION_ID:"transactionId",
}

const searchParamsSchema = z.object({
    transaction:z.number().optional(),
    page:z.number().default(1).catch(1),
    size:z.number().default(20).catch(20),
})

export const transactionRoute = createRoute({
    getParentRoute:()=>rootRoute,
    component:TransactionsPage,
    path:"transactions",
    validateSearch:searchParamsSchema,
    loader: ({context:{queryClient}})=>{
        queryClient.ensureQueryData(transactionQueryOptions)
        queryClient.ensureQueryData(transactionSummaryQueryOptions)
    },
    pendingComponent:()=><div>Loading...</div>,
});