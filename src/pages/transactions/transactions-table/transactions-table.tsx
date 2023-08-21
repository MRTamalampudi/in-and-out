import React from 'react';
import {Table} from "components";
import TransactionsConstants from "../transactions-constants";
import {Checkbox, Tooltip} from "@mantine/core";
import {fakerEN_IN} from "@faker-js/faker";
import TransactionType from "../../../components/transaction-type";
import {TransactionTypes} from "../../../components/transaction-type/transaction-type";

interface TransactionsTableProps {}

const dataAttributes = {
    CHECK_BOX: {
        name: "CheckBox",
        className: "flex-basis-1/20",
    },
    NOTE: {
        name: "Note",
        className: "flex-basis-8/20 truncate",
    },
    TRANSACTEE: {
        name: "Transactee",
        className: "flex-basis-3/20",
    },
    DATE: {
        name: "Date",
        className: "flex-basis-2/20",
    },
    CATEGORY: {
        name: "Category",
        className: "flex-basis-2/20",
    },
    TYPE: {
        name: "Type",
        className: "flex-basis-2/20",
    },
    AMOUNT: {
        name: "Amount",
        className:"flex-basis-2/20"
    }
}

type Transaction = {
    id:number,
    note:string,
    transactee:string,
    date:string,
    category:string,
    type:TransactionTypes,
    amount:string,
}

const TransactionsTable = () => {

    const data:Transaction[] = []

    for (let i = 0; i < 20; i++) {
        data.push({
            id:i,
            note: fakerEN_IN.word.words({count:{min:3,max:5}}),
            transactee: fakerEN_IN.person.firstName(),
            date: fakerEN_IN.date.anytime().toLocaleDateString(),
            category: fakerEN_IN.commerce.department(),
            type: TransactionTypes.OWE,
            amount:`$${fakerEN_IN.finance.amount({min:100,max:500,dec:0})}`
        })
    }

    const locales = TransactionsConstants().locales;
    return (
        <Table title={locales.TRANSACTIONS}>
            <thead>
            <tr>
                <td className={dataAttributes.CHECK_BOX.className}>
                    <Checkbox size={"xs"}/>
                </td>
                <td className={dataAttributes.NOTE.className}>
                    {dataAttributes.NOTE.name}
                </td>
                <td className={dataAttributes.TRANSACTEE.className}>
                    {dataAttributes.TRANSACTEE.name}
                </td>
                <td className={dataAttributes.DATE.className}>
                    {dataAttributes.DATE.name}
                </td>
                <td className={dataAttributes.CATEGORY.className}>
                    {dataAttributes.CATEGORY.name}
                </td>
                <td className={dataAttributes.TYPE.className}>
                    {dataAttributes.TYPE.name}
                </td>
                <td className={dataAttributes.AMOUNT.className}>
                    {dataAttributes.AMOUNT.name}
                </td>
            </tr>
            </thead>
            <tbody>
            {
                data.map(transaction=> {
                   return (
                       <Transaction_ key={transaction.id} transaction={transaction} />
                   )
                })
            }
            </tbody>
        </Table>
    )
}


interface TransactionProps{
    transaction:Transaction;
}
const Transaction_ = ({transaction}:TransactionProps) =>{
    return (
        <tr>
            <td className={dataAttributes.CHECK_BOX.className}>
                <Checkbox size={"xs"}/>
            </td>
            <td className={dataAttributes.NOTE.className}>
                <Tooltip
                    label={transaction.note}
                    position={"bottom"}
                >
                    <span>
                        {transaction.note}
                    </span>
                </Tooltip>
            </td>
            <td className={dataAttributes.TRANSACTEE.className}>
                {transaction.transactee}
            </td>
            <td className={dataAttributes.DATE.className}>
                {transaction.date}
            </td>
            <td className={dataAttributes.CATEGORY.className}>
                {transaction.category}
            </td>
            <td className={dataAttributes.TYPE.className}>
                <TransactionType type={transaction.type} />
            </td>
            <td className={`${dataAttributes.AMOUNT.className} currency`}>
                {transaction.amount}
            </td>
        </tr>
    )
}




export default TransactionsTable;
