import TransactionsPage from "./transactions.page";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "router";
import { z } from "zod";


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
});