import React, {useEffect, useState} from 'react';
import './App.scss';
import {Outlet, useLocation, useNavigate} from "react-router";
import UnderConstruction from "./components/under-construction/under-construction";
import Header from "./components/header";
import Table from "./components/table/table";
import TransactionForm from "./pages/transactions/transaction-form/transaction-form";
import "./i18n"
import {NavBar} from "components";
import {Provider} from "react-redux";

import store from "./redux/index";





function App() {
    const navigate = useNavigate();

    const location  = useLocation();

  return (
      <Provider store={store}>
    <div className="App" >
        <NavBar/>
        <div className={"appContainer"}>
            <Header
                title={"Transactions"}
                pageHeader={true}
            />
            <div className={"outlet"}>
                <Outlet/>
            </div>
        </div>
        {/*<Outlet/>*/}
        {/*<UnderConstruction/>*/}
        {/*<div className={"test"}>*/}
        {/*    <TransactionSummary time={"Expires Today"}*/}
        {/*    logo={""} title={"Netflix"} amount={"$200"}/>*/}
        {/*    <Button>Testing</Button>*/}
        {/*    <Select*/}
        {/*        label="Framework"*/}
        {/*        placeholder="Pick one"*/}
        {/*        rightSection={<i className={"fa-arrow-down"}></i>}*/}
        {/*        variant={"filled"}*/}
        {/*        data={[*/}
        {/*            { value: 'react', label: 'React' },*/}
        {/*            { value: 'ng', label: 'Angular' },*/}
        {/*            { value: 'svelte', label: 'Svelte' },*/}
        {/*            { value: 'vue', label: 'Vue' },*/}
        {/*        ]}*/}
        {/*        />*/}
        {/*    <SummaryCard/>*/}
        {/*</div>*/}
        {/*<Dashboard/>*/}
        {/*<Books/>*/}
        {/*<LineGraph/>*/}
        {/*<div style={{width:'900px',height:'500px'}}>*/}
        {/*    <MyResponsiveLine/>*/}
        {/*</div>*/}
    </div>
      </Provider>
  );
}

export default App;
