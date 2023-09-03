import React, {useEffect, useMemo, useState} from 'react';
import {Table} from "components";
import TransactionsConstants from "../transactions-constants";
import {Checkbox, Tooltip} from "@mantine/core";
import {fakerEN_IN} from "@faker-js/faker";
import TransactionType from "../../../components/transaction-type";
import {TransactionTypes} from "../../../components/transaction-type/transaction-type";
import {HandleSelectAll, HandleSelection} from "../../../utils/handleSelection";
import Thead from "../../../components/footer/thead";
import ActionsRow from "../../../components/table/actions-row";
import {useDispatch, useSelector} from "react-redux";
import {add, setProducts} from "../../../redux/slice/transaction-slice";
import {use} from "i18next";
import {RootState} from "../../../redux";
import {useSearchParams} from "react-router-dom";

interface TransactionsTableProps {}

const dataAttributes = {
    "CHECK_BOX": {
        name: "CheckBox",
        className: "flex-basis-1/20",
    },
    "NOTE": {
        name: "Note",
        className: "flex-basis-8/20 truncate",
    },
    "TRANSACTEE": {
        name: "Transactee",
        className: "flex-basis-3/20",
    },
    "DATE": {
        name: "Date",
        className: "flex-basis-2/20",
    },
    "CATEGORY": {
        name: "Category",
        className: "flex-basis-2/20",
    },
    "TYPE": {
        name: "Type",
        className: "flex-basis-2/20",
    },
    "AMOUNT": {
        name: "Amount",
        className:"flex-basis-2/20"
    }
}

export type Transaction = {
    id:number,
    note:string,
    transactee:string,
    date:string,
    category:string,
    type:TransactionTypes,
    amount:string,
}

const TransactionsTable = () => {

    const [searchParams,setSearchParams] = useSearchParams();

    const dispatch = useDispatch();


    const [selectionList,setSelectionList] = useState<number[]>([]);

    const [selectAllChecked,setSelectAllChecked] = useState<boolean>(false);

    let data:Transaction[] =[];

    useMemo(()=>{
        const data_:Transaction[] = [];
        for (let i = 0; i < 20; i++) {
            data_.push({
                id:i,
                note: fakerEN_IN.word.words({count:{min:3,max:5}}),
                transactee: fakerEN_IN.person.firstName(),
                date: fakerEN_IN.date.anytime().toLocaleDateString(),
                category: fakerEN_IN.commerce.department(),
                type: TransactionTypes.OWE,
                amount:`$${fakerEN_IN.finance.amount({min:100,max:500,dec:0})}`
            })
        }
        dispatch(setProducts(data_))
    },[])

    data = useSelector((state:RootState)=> state.transactions);

    const selectdata = useSelector((state:RootState)=> state.transactions);
    console.log(selectdata)

    function handleSelectALl(cheked:boolean) {
        setSelectionList((prevState)=>{
           const updatsedList:number[] = HandleSelectAll<Transaction>(data,selectionList,cheked);
           console.log(updatsedList);
            setSelectAllChecked(updatsedList.length == data.length);
           return updatsedList
        })
    }

    const handlesSelection= (id: number, checked: boolean) => {
        setSearchParams(((prev)=> new URLSearchParams({id:`${id}`,test:"tes"})))
        console.log(searchParams.get("id"))
        setSelectionList((prevState)=> {
            const updatedList = HandleSelection(prevState, id, checked);
            setSelectAllChecked(updatedList.length==data.length)
            return updatedList;
        })
    }
    const locales = TransactionsConstants().locales;

    const Heading = () => {
      return (
          <Thead handleSelectAll={handleSelectALl}>
              <tr>
                  <td className={dataAttributes.CHECK_BOX.className}>
                      <Checkbox
                          checked={selectAllChecked}
                          size={"xs"}
                          onChange={(event)=>{handleSelectALl(event.currentTarget.checked)}}
                      />
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
          </Thead>
      )
    }

    return (
        <Table
            selectedList={selectionList}
            title={locales.TRANSACTIONS}
            totalElements={20}
        >
            {
                selectionList.length ?
                    <ActionsRow
                        checked={selectAllChecked}
                        numberOfElements={data.length}
                        selectedCount={selectionList.length}
                        handleSelectALl={handleSelectALl}
                    /> :
                    <Heading/>
            }
            <tbody>
            {
                data.map(transaction=> {
                   return (
                       <Transaction_
                           handleSelection={handlesSelection}
                           key={transaction.id}
                           transaction={transaction}
                           selectionList={selectionList}
                       />
                   )
                })
            }
            </tbody>
        </Table>
    )
}


interface TransactionProps{
    transaction:Transaction;
    handleSelection:(id:number,chekced:boolean)=>void;
    selectionList:number[];
}
const Transaction_ = (
    {
        transaction,
        handleSelection,
        selectionList
    }:TransactionProps) =>{
    return (
        <tr>
            <td className={dataAttributes.CHECK_BOX.className}>
                <Checkbox size={"xs"}
                          checked={selectionList.indexOf(transaction.id) > -1}
                          onChange={(event)=>{handleSelection(transaction.id,event.currentTarget.checked)}}
                />
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
