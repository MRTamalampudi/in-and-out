import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Colors } from "theme/colors";
import "@mantine/core/styles.css";
import "styles/mantine/index.scss";
import "@mantine/dates/styles.css";
import { createRootRouteWithContext, createRoute, createRouter, Outlet, RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "App";
import { transactionRoute } from "pages/transactions/routes";
import { splitBillRoute } from "pages/split-bill/routes";
import { loginRoute } from "pages/login/routes";
import TransactionsPage from "pages/transactions/transactions.page";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const queryClient = new QueryClient({
    defaultOptions: {
        queries:{
            refetchOnWindowFocus:false
        }
    },
});

export const rootRoute = createRootRouteWithContext<{
    queryClient: QueryClient;
}>()({
    component: ()=><><Outlet/></>,
});


export const appRoute = createRoute({
    getParentRoute:()=>rootRoute,
    component:App,
    path:"/",
})



const routeTree = rootRoute.addChildren([
    appRoute.addChildren([transactionRoute,splitBillRoute]),
    loginRoute
])

export const router = createRouter({
    routeTree,
    context:{
        queryClient
    }
})

declare module '@tanstack/react-router' {
    interface Register {
        // This infers the type of our router and registers it across your entire project
        router: typeof router
    }
}

root.render(
      <Colors>
          <QueryClientProvider client={queryClient}>
              <RouterProvider router={router}/>
          </QueryClientProvider>
      </Colors>
);
