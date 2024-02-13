import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Colors } from "theme/colors";
import "@mantine/core/styles.css";
import "styles/mantine/index.scss";
import "@mantine/dates/styles.css";
import { createRootRouteWithContext, createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "App";
import { transactionRoute } from "pages/transactions/routes";
import { splitBillRoute } from "pages/split-bill/routes";
import { loginRoute } from "pages/login/routes";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const queryClient = new QueryClient({
    defaultOptions: {},
});

export const rootRoute = createRootRouteWithContext<{
    queryClient: QueryClient;
}>()({
    component: App,
});



const routeTree = rootRoute.addChildren([
    transactionRoute,
    splitBillRoute,
    loginRoute
])

export const router = createRouter({
    routeTree,
    defaultPreloadStaleTime:0,
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
