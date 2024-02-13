import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "router";
import LoginPage from "pages/login/loginPage";

export const loginRoute = createRoute({
    path:"login",
    getParentRoute:()=>rootRoute,
    component:LoginPage
})