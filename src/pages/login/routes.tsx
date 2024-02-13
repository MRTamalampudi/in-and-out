import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "router";
import LoginPage from "pages/login/loginPage";

const loginRoute = createRoute({
    path:"login",
    getParentRoute:()=>rootRoute,
    component:LoginPage
})