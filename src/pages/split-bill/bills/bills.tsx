import React, {FC, useState} from 'react';
import styles from './bills.module.scss';
import {Table} from "components";
import {useTranslation} from "react-i18next";
import {Checkbox, Tooltip} from "@mantine/core";
import {SplitBillConstants} from "../split-bill-constants";
import {fakerEN_IN as faker} from "@faker-js/faker";
import Thead from "../../../components/table/thead";
import {useDispatch} from "react-redux";
import {number} from "prop-types";
import {tableRowProps} from "../../../components/table/table-row-props";
import {Tbody, Tr} from "../../../components/table/tbody";
import ActionsRow from "../../../components/table/actions-row";

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
    BILL : {
        name: "Bill",
        className:"flex-basis-8/20 truncate"
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

    const dispatch = useDispatch();
    const [selectionList,setSelectionList] = useState<number[]>([]);

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


    const Heading = () => {
      return (
          <Thead
              data={data}
              setSelection={setSelectionList}
          >
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
          </Thead>
      )
    }



  return (
      <Table
          title={SplitBillConstants().locales.BILLS}
          totalElements={20}
          rounded={false}
          borders={false}
      >
          {
              selectionList.length ?
                  <ActionsRow
                      data={data}
                      setSelection={setSelectionList}
                      checked={selectionList.length == data.length}
                      selectedCount={selectionList.length}
                  /> :
                  <Heading/>
          }
          <tbody>
          {
              data.map(bill=>{
                  return (
                      <Bill
                          key={bill.id}
                          data={bill}
                          setSelectionList={setSelectionList}
                          checkBoxSelected={selectionList.indexOf(bill.id) > -1}
                      />
                  )
              })
          }
          </tbody>
      </Table>
  )
}

export default Bills;


const Bill =<T extends {id:number}> ({
    data,setSelectionList,checkBoxSelected
}:tableRowProps<any>) => {
    return (
        <Tr
            className={styles.row}
            checkBoxSelected={checkBoxSelected}
            rowData={data}
            setSelection={setSelectionList}
        >
            <td className={dataAttributes.BILL.className}>
                <Tooltip label={data.bill} position={"bottom"}>
                    <span>
                        {data.bill}
                    </span>
                </Tooltip>

            </td>
            <td className={dataAttributes.PAID_BY.className}>
                {data.paidBy}
            </td>
            <td className={dataAttributes.PAID_ON.className}>
                {data.paidOn}
            </td>
            <td className={dataAttributes.AMOUNT.className}>
                {`$ ${data.amount}`}
            </td>
            <td className={dataAttributes.MY_SHARE.className}>
                {`$ ${data.myShare}`}
            </td>
        </Tr>
    )
}
