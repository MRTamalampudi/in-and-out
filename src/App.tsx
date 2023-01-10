import React, {useState} from 'react';
import './App.scss';
import {Button, Drawer, Select, Tabs, TextInput} from '@mantine/core';
import {Colors} from "./constants/colors";
import {NavItem} from "./components/atoms/nav-item/nav-item";
import NavBar from "./components/nav-bar/nav-bar";
import CashCard from "./components/atoms/cash-card/cash-card";
import TransactionSummary from "./components/atoms/transaction-summary/transaction-summary";
import Card from "./components/atoms/card/card";
import Books from "./pages/books/books";
import Dashboard from "./pages/dashboard/dashboard";
import LineGraph from "./components/line-graph/line-graph";
import MyResponsiveLine from "./components/chart-js-graph/chart-js-graph";
import {TransactionsData} from "./static-data/transactions";
import {Outlet} from "react-router";
import UnderConstruction from "./components/under-construction/under-construction";




function App() {
    const TRANSACTION = 'transaction'

    if(!sessionStorage.getItem(TRANSACTION)){
        sessionStorage.setItem(TRANSACTION,JSON.stringify(TransactionsData))
    }

  return (
    <div className="App" >
        <NavBar/>
        <Outlet/>
        <UnderConstruction/>
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
