import React, {useState} from 'react';
import './App.scss';
import {Button, Drawer, Select, Tabs, TextInput} from '@mantine/core';
import {Colors} from "./constants/colors";
import {NavItem} from "./components/atoms/nav-item/nav-item";
import NavBar from "./components/nav-bar/nav-bar";
import CashCard from "./components/atoms/cash-card/cash-card";
import TransactionSummary from "./components/atoms/transaction-summary/transaction-summary";
import SummaryCard from "./components/atoms/summary-card/summary-card";
import Books from "./pages/books/books";
import Dashboard from "./pages/dashboard/dashboard";


function App() {
    const [open,setOpen] = useState<boolean>(false);
  return (
    <div className="App" >
        {/*<Button onClick={()=>setOpen(true)}> Open Modal</Button>*/}
        {/*<TextInput label={"Cash in"} placeholder={"text"}></TextInput>*/}
        <NavBar/>
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
        <Dashboard/>
    </div>
  );
}

export default App;
