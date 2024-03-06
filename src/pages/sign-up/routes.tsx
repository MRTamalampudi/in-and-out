import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "index";

export const signUpRoute = createRoute({
    getParentRoute:()=>rootRoute,
    path:"signup",
    pendingComponent:()=><div>Loading</div>
}).lazy(()=>import("./sign-up-page").then(d=>d.SignUpPageLazyRoute))