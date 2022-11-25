import React, {useState} from 'react';
import './App.scss';
import {H1, H2, H3, H4, Body1, Body2, H5, Caption} from "./components/typography";
import {Button, Drawer, Tabs, TextInput} from '@mantine/core';
import {Colors} from "./constants/colors";
import {NavItem} from "./components/atoms/nav-item/nav-item";
import NavBar from "./components/nav-bar/nav-bar";


function App() {
    const [open,setOpen] = useState<boolean>(false);
  return (
    <div className="App" >
        {/*<Drawer opened={open} position={"right"} size={'xl'} onClose={()=>setOpen(false)} withCloseButton={false}>*/}
        {/*    <Tabs defaultValue={"Cash in"}>*/}
        {/*        <Tabs.List grow={true}>*/}
        {/*            <Tabs.Tab value={"Cash in"} >Cash in</Tabs.Tab>*/}
        {/*            <Tabs.Tab value={"Cash Out"} color={'red'}>Cash out</Tabs.Tab>*/}
        {/*        </Tabs.List>*/}
        {/*    </Tabs>*/}
        {/*</Drawer>*/}
        {/*<Button onClick={()=>setOpen(true)}> Open Modal</Button>*/}
        {/*<TextInput label={"Cash in"} placeholder={"text"}></TextInput>*/}
        <NavBar/>
    </div>
  );
}

export default App;
