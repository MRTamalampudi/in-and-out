import React, {useState} from 'react';
import styles from './split-bill.module.scss';
import Table from "../../components/table";
import BillGroup from "./bill-group";
import {plusOutline} from "../../assets/icons";
import {Menu} from "@mantine/core";
import BillForm from "./bill-form";
import GroupForm from "./group-form";




interface SplitBillProps {}

const SplitBill = (
    {}:SplitBillProps
) => {

    const [billFormOpened,setBillFormOpened] = useState<boolean>(false);
    const [groupFormOpened,setGroupBillFormOpened] = useState<boolean>(false);


    return (
        <div className={styles.SplitBill}>
            <div className={"modal"}>
                <BillForm
                    opened={billFormOpened}
                    setOpened={setBillFormOpened}
                />
                <GroupForm
                    opened={groupFormOpened}
                    setOpened={setGroupBillFormOpened}
                />
            </div>
            <Menu position={"left-end"}>
                <Menu.Target>
                    <div className={styles.addNew}>
                        <img src={plusOutline} className={"icon24"}/>
                    </div>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item onClick={()=> setBillFormOpened(true)}>
                        New Bill
                    </Menu.Item>
                    <Menu.Divider/>
                    <Menu.Item onClick={()=>setGroupBillFormOpened(true)}>
                        New Group
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
            <div className={styles.left}>
                <Table title={"Groups"}>
                    <tbody>
                    <tr>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            <div className={styles.right}>
                <BillGroup/>
            </div>
        </div>
    )
}

export default SplitBill;
