import { createRoute } from "@tanstack/react-router";
import LoginPage from "pages/login/loginPage";
import { rootRoute } from "index";

export const loginRoute = createRoute({
    getParentRoute:()=>rootRoute,
    path:"login",
    component:LoginPage
})