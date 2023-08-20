import React, { FC } from 'react';
import styles from './bills.module.scss';
import {Table} from "components";
import {useTranslation} from "react-i18next";
import {Checkbox, Tooltip} from "@mantine/core";
import {SplitBillConstants} from "../split-bill-constants";
import {fakerEN_IN as faker} from "@faker-js/faker";

interface BillsProps {}

type Bill= {
    id:number,
    bill:string,
    paidBy:string,
    paidOn:string,
    amount:number,
    myShare:number
}

const dataAttributes = {
    CHECK_BOX : {
        name: "CheckBox",
        className:"flex-basis-1/20"
    },
    BILL : {
        name: "Bill",
        className:"flex-basis-7/20 truncate"
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

    const data:Bill[] = []

    for (let i = 0; i < 20; i++) {
        data.push({
            id:i,
            bill: faker.word.words({count:{min:3,max:5}}),
            paidOn: faker.date.anytime().toLocaleDateString(),
            paidBy: faker.person.firstName(),
            amount: Number(faker.finance.amount({min:30,max:100,dec:0})),
            myShare: Number(faker.finance.amount({min:30,max:100,dec:0})),
        })
    }



  return (
      <Table
          title={SplitBillConstants().locales.BILLS}
          entries={true}
          rounded={false}
          borders={false}
      >
          <thead>
          <tr>
              <th className={dataAttributes.CHECK_BOX.className}>
                  <Checkbox size={"xs"}/>
              </th>
              <th className={dataAttributes.BILL.className}>
                  {dataAttributes.BILL.name}
              </th>
              <th className={dataAttributes.PAID_BY.className}>
                  {dataAttributes.PAID_BY.name}
              </th>
              <th className={dataAttributes.PAID_ON.className}>
                  {dataAttributes.PAID_ON.name}
              </th>
              <th className={dataAttributes.AMOUNT.className}>
                  {dataAttributes.AMOUNT.name}
              </th>
              <th className={dataAttributes.MY_SHARE.className}>
                  {dataAttributes.MY_SHARE.name}
              </th>
          </tr>
          </thead>
          <tbody>
          {
              data.map(bill=>{
                  return (
                      <Bill key={bill.id} bill={bill}/>
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
            <td className={dataAttributes.CHECK_BOX.className}>
                <Checkbox size={"xs"}/>
            </td>
            <td className={dataAttributes.BILL.className}>
                <Tooltip label={bill.bill} position={"bottom"}>
                    <span>
                        {bill.bill}
                    </span>
                </Tooltip>

            </td>
            <td className={dataAttributes.PAID_BY.className}>
                {bill.paidBy}
            </td>
            <td className={dataAttributes.PAID_ON.className}>
                {bill.paidOn}
            </td>
            <td className={dataAttributes.AMOUNT.className}>
                {`$ ${bill.amount}`}
            </td>
            <td className={dataAttributes.MY_SHARE.className}>
                {`$ ${bill.myShare}`}
            </td>
        </tr>
    )
}
