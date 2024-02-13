import {
    createRootRoute,
    createRoute,
    createRouter,
} from "@tanstack/react-router";
import App from "App";
import TransactionsPage from "pages/transactions/transactions.page";
import SplitBillPage from "pages/split-bill/split-bill.page";
import { splitBillRoute } from "pages/split-bill/routes";
import { transactionRoute } from "pages/transactions/routes";
import { loginRoute } from "pages/login/routes";

export const rootRoute = createRootRoute({
    component:App,
})



const routeTree = rootRoute.addChildren([
    transactionRoute,
    splitBillRoute,
    loginRoute
])

export const router = createRouter({
    routeTree,
})

declare module '@tanstack/react-router' {
    interface Register {
        // This infers the type of our router and registers it across your entire project
        router: typeof router
    }
}