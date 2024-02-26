import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "index";

export const loginRoute = createRoute({
    getParentRoute:()=>rootRoute,
    path:"login",
}).lazy(()=>import("./loginPage").then(d=>d.LoginPageLazyRoute))