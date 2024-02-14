import React, { useEffect } from "react";
import "./App.scss";
import { Outlet } from "@tanstack/react-router";
import Header from "./components/header";
import "./i18n";
import { NavBar } from "components";
import { banner } from "templates/banner";

import { Toaster } from "sonner";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "index";

function App() {
    useEffect(() => {
        console.log(banner);
    });

    return (
        <>
            <Toaster duration={2000} />
            <div className="App">
                <NavBar />
                <div className={"appContainer"}>
                    <Header title={"Transactions"} pageHeader={true} />
                    <div className={"outlet"}>
                        <Outlet />
                    </div>
                </div>
            </div>
            {/*<ReactQueryDevtools client={queryClient} position={"left"}/>*/}
        </>
    );
}

export default App;
