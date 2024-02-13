import React, { useEffect } from "react";
import "./App.scss";
import { Outlet } from "@tanstack/react-router";
import Header from "./components/header";
import "./i18n";
import { NavBar } from "components";
import { Provider } from "react-redux";
import store from "./redux/index";
import { banner } from "templates/banner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "sonner";

const queryClient = new QueryClient({
    defaultOptions: {},
});

function App() {

    useEffect(() => {
        console.log(banner);
    });

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Toaster duration={2000}/>
                <div className="App">
                    <NavBar />
                    <div className={"appContainer"}>
                        <Header title={"Transactions"} pageHeader={true} />
                        <div className={"outlet"}>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </Provider>
        </QueryClientProvider>
    );
}

export default App;
