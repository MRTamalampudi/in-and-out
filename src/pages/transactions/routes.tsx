import TransactionsPage from "./transactions.page";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "router";
import { z } from "zod";


export const TRANSACTIONS_SLUGS = {
    TRANSACTION_ID:"transactionId",
}

const searchParamsSchema = z.object({
    transaction:z.number().optional(),
})

export const transactionRoute = createRoute({
    getParentRoute:()=>rootRoute,
    component:TransactionsPage,
    path:"transactions",
    validateSearch:searchParamsSchema
});