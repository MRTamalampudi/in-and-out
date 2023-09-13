import React, {FC, useState} from 'react';
import styles from './owe.module.scss';
import {Button, Checkbox, Popover} from "@mantine/core";
import {Table} from "../../../../components";
import {fakerEN_IN} from "@faker-js/faker";

interface oweProps {
    amount:number,
}


type oweTransaction = {
    id:number,
    name:string,
    amount:number,
}

const dataAttributes = {
    "checkbox": {
        "name": "Check Box",
        "className": "flex-basis-1/20"
    },
    "name": {
        "name": "Name",
        "className": "flex-basis-15/20"
    },
    "amount": {
        "name": "Amount",
        "className": "flex-basis-4/20 currency"
    },
}

const Owe = ({amount}:oweProps) => {

    const checkedList:number[]=[];

    const [disable,setDisable] =  useState<boolean>(true);

    const handleChange = (checked:boolean,id:number) => {
        if (checked) {
            checkedList.push(id);
        } else {
            const indexOfId = checkedList.indexOf(id);
            if (indexOfId > -1) {
                checkedList.splice(indexOfId, 1);
            }
        }

        checkedList.length ? setDisable(false) : setDisable(true)
    }

    const data:oweTransaction[] = []

    for (let i = 0; i < 10; i++) {
        data.push({
            id:i,
            name:fakerEN_IN.person.firstName(),
            amount: Number(fakerEN_IN.finance.amount({min:20,max:50,dec:0}))
        })
    }

    return(
        <Popover
            position={"bottom"}
            withArrow={true}
            width={320}
            radius={"md"}
        >
            <Popover.Target>
                  <span
                      className={styles.owe}
                  >
                      owe
                      <span className={"currency"}>
                          {`$${amount}`}
                      </span>
                  </span>
            </Popover.Target>
            <Popover.Dropdown>
                <Table
                    title={"testing"}
                    usePagination={false}
                    height={320}
                    metaRow={false}
                >
                    <tbody>
                    {
                        data.map(transaction => {
                            return (
                                <Transaction
                                    key={transaction.id}
                                    handleChange={handleChange}
                                    transaction={transaction}
                                />
                            )
                        })
                    }
                    </tbody>
                </Table>
                <Button
                    disabled={disable}
                    size={"xs"}
                    className={"mt-8"}
                    fullWidth={true}
                >
                    Mark as settled
                </Button>
            </Popover.Dropdown>
        </Popover>
    )
}


interface TransactionProps {
    transaction:oweTransaction,
    handleChange:(checked:boolean,id:number)=>void,
}

const Transaction = ({
                         transaction,
                         handleChange
                     }:TransactionProps) => {
    return (
        <tr>
            <td className={dataAttributes.checkbox.className}>
                <Checkbox onChange={(event)=>{
                    handleChange(event.currentTarget.checked,transaction.id)
                }} size={"xs"}/>
            </td>
            <td className={dataAttributes.name.className}>
                {transaction.name}
            </td>
            <td className={dataAttributes.amount.className}>
                {transaction.amount}
            </td>
        </tr>
    )
}

export default Owe;
