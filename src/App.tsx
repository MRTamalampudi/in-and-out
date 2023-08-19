import React, {useEffect, useState} from 'react';
import './App.scss';
import {Button, Drawer, Select, Tabs, TextInput} from '@mantine/core';
import {Colors} from "./constants/colors";
import {NavItem} from "./components/atoms/nav-item/nav-item";
import NavBar from "./components/nav-bar";
import CashCard from "./components/atoms/cash-card/cash-card";
import TransactionSummary from "./components/atoms/transaction-summary/transaction-summary";
import Card from "./components/atoms/card/card";
import Books from "./pages/books/books";
import Dashboard from "./pages/dashboard/dashboard";
import LineGraph from "./components/line-graph/line-graph";
import MyResponsiveLine from "./components/chart-js-graph/chart-js-graph";
import {TransactionsData} from "./static-data/transactions";
import {Outlet, useLocation, useNavigate} from "react-router";
import UnderConstruction from "./components/under-construction/under-construction";
import Header from "./components/header";
import Table from "./components/table";
import Summary from "./components/summary/summary";
import TransactionForm from "./pages/transactions/transaction-form";
import "./i18n"





function App() {
    const navigate = useNavigate();

    const location  = useLocation();

  return (
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
  );
}

export default App;
