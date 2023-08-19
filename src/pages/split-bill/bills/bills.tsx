import React, { FC } from 'react';
import styles from './bills.module.scss';
import {Table} from "components";
import {useTranslation} from "react-i18next";
import {Checkbox} from "@mantine/core";
import {SplitBillConstants} from "../split-bill-constants";

interface BillsProps {}

type Bill= {
    bill:string,
    paidBy:string,
    paidOn:string,
    amount:string,
    myShare:string
}

const headings = {
    CHECK_BOX : {
        name: "CheckBox",
        className:"flex-basis-1/20"
    },
    BILL : {
        name: "Bill",
        className:"flex-basis-7/20"
    },
    PAID_BY: {
        name: "Paid by",
        className:"flex-basis-3/20"
    },
    PAID_ON: {
        name: "Paid on",
        className:"flex-basis-3/20"
    },
    AMOUNT: {
        name: "Amount",
        className:"flex-basis-3/20"
    },
    MY_SHARE: {
        name: "My share",
        className:"flex-basis-3/20"
    }
}

const Bills = (
    {

    }:BillsProps
) => {

    const {t} =  useTranslation();

    const data:Bill[] = [
        {
            bill: "Testing",
            paidOn: "12/02/2022",
            paidBy: "ManikantaReddy",
            amount: "$300",
            myShare: "$20"
        },
        {
            bill: "Testing",
            paidOn: "12/02/2022",
            paidBy: "ManikantaReddy",
            amount: "$300",
            myShare: "$20"
        },
        {
            bill: "Testing",
            paidOn: "12/02/2022",
            paidBy: "ManikantaReddy",
            amount: "$300",
            myShare: "$20"
        },
        {
            bill: "Testing",
            paidOn: "12/02/2022",
            paidBy: "ManikantaReddy",
            amount: "$300",
            myShare: "$20"
        },
        {
            bill: "Testing",
            paidOn: "12/02/2022",
            paidBy: "ManikantaReddy",
            amount: "$300",
            myShare: "$20"
        },
        {
            bill: "Testing",
            paidOn: "12/02/2022",
            paidBy: "ManikantaReddy",
            amount: "$300",
            myShare: "$20"
        },
        {
            bill: "Testing",
            paidOn: "12/02/2022",
            paidBy: "ManikantaReddy",
            amount: "$300",
            myShare: "$20"
        },
        {
            bill: "Testing",
            paidOn: "12/02/2022",
            paidBy: "ManikantaReddy",
            amount: "$300",
            myShare: "$20"
        },
        {
            bill: "Testing",
            paidOn: "12/02/2022",
            paidBy: "ManikantaReddy",
            amount: "$300",
            myShare: "$20"
        },
        {
            bill: "Testing",
            paidOn: "12/02/2022",
            paidBy: "ManikantaReddy",
            amount: "$300",
            myShare: "$20"
        },
        {
            bill: "Testing",
            paidOn: "12/02/2022",
            paidBy: "ManikantaReddy",
            amount: "$300",
            myShare: "$20"
        },
        {
            bill: "Testing",
            paidOn: "12/02/2022",
            paidBy: "ManikantaReddy",
            amount: "$300",
            myShare: "$20"
        },
    ]



  return (
      <Table
          title={SplitBillConstants().LOCALES().BILLS}
          entries={true}
          rounded={false}
          borders={false}
      >
          <thead>
          <tr>
              <th className={headings.CHECK_BOX.className}>
                  <Checkbox size={"xs"}/>
              </th>
              <th className={headings.BILL.className}>
                  {headings.BILL.name}
              </th>
              <th className={headings.PAID_BY.className}>
                  {headings.PAID_BY.name}
              </th>
              <th className={headings.PAID_ON.className}>
                  {headings.PAID_ON.name}
              </th>
              <th className={headings.AMOUNT.className}>
                  {headings.AMOUNT.name}
              </th>
              <th className={headings.MY_SHARE.className}>
                  {headings.MY_SHARE.name}
              </th>
          </tr>
          </thead>
          <tbody>
          {
              data.map(bill=>{
                  return (
                      <Bill bill={bill}/>
                  )
              })
          }
          </tbody>
      </Table>
  )
}

export default Bills;

interface BillProps {
    bill:Bill
}
const Bill = ({
    bill
}:BillProps) => {
    return (
        <tr className={styles.row}>
            <td className={headings.CHECK_BOX.className}>
                <Checkbox size={"xs"}/>
            </td>
            <td className={headings.BILL.className}>
                {bill.bill}
            </td>
            <td className={headings.PAID_BY.className}>
                {bill.paidBy}
            </td>
            <td className={headings.PAID_ON.className}>
                {bill.paidOn}
            </td>
            <td className={headings.AMOUNT.className}>
                {bill.amount}
            </td>
            <td className={headings.MY_SHARE.className}>
                {bill.myShare}
            </td>
        </tr>
    )
}
