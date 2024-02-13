import { createRoute } from "@tanstack/react-router";
import LoginPage from "pages/login/loginPage";
import { rootRoute } from "index";

export const loginRoute = createRoute({
    path:"login",
    getParentRoute:()=>rootRoute,
    component:LoginPage
})