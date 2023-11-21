import React, {Dispatch, SetStateAction, useMemo, useState} from 'react';
import {Table} from "components";
import {Checkbox, Tooltip} from "@mantine/core";
import {fakerEN_IN} from "@faker-js/faker";
import Thead from "components/table/thead";
import ActionsRow from "components/table/actions-row";
import {useDispatch, useSelector} from "react-redux";
import {index} from "redux/slice/transaction.slice";
import {RootState} from "redux";
import {Link, useParams, useSearchParams} from "react-router-dom";
import {useTransactionsConstants} from "constants/index";
import TransactionTypeBadge from "components/transaction-type";
import {PaymentModeEnum, TransactionTypeEnum} from "enum";
import {Transaction} from "model";
import {Tr} from "components/table/tbody";
import {useNavigate} from "react-router";
import {tableRowProps} from "components/table/table-row-props";
import {useQuery} from "@tanstack/react-query";
import {indexTransactions} from "service/transaction.service";
import {useTransactionsTranslations} from "locales/translation-hooks";

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
        className:"flex-basis-2/20 text-align-right"
    }
}

const TransactionsTable = () => {

    const [selectionList,setSelectionList] = useState<number[]>([]);
    const {transactions:{TRANSACTIONS}} = useTransactionsTranslations();



    const transactionClient = useQuery({
        queryKey:["transactions"],
        queryFn:()=>indexTransactions(),
        staleTime: 1000000,
    })



    const {transactionLocales} = useTransactionsConstants();



    const Heading = () => {
      return (
          <Thead
              data={transactionClient.data?.content!}
              setSelection={setSelectionList}
          >
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
          </Thead>
      )
    }

    return (
        <Table
            selectedList={selectionList}
            title={TRANSACTIONS}
            pageData={transactionClient.data}
        >
            {
                selectionList.length ?
                    <ActionsRow
                        checked={selectionList.length == transactionClient.data?.content.length}
                        selectedCount={selectionList.length}
                        data={transactionClient.data?.content!}
                        setSelection={setSelectionList}
                    /> :
                    <Heading/>
            }
            <tbody>
            {
                transactionClient.data && transactionClient.data?.content.map(transaction=> {
                   return (
                       <Transaction_
                           key={transaction.id}
                           data={transaction}
                           setSelectionList={setSelectionList}
                           checked={selectionList.indexOf(transaction.id)>-1}
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
    setSelectionList:Dispatch<SetStateAction<number[]>>;
    checked:boolean;
}
const Transaction_ = <T extends {id:number}> (
    {
        data,
        setSelectionList,
        checked,
    }:tableRowProps<any>) =>{

    const {transactionId}= useParams();
    const navigate = useNavigate();

    function updateQueryParams() {
        navigate(data.id?.toString());
    }

    const selected = transactionId == data.id?.toString();


    return (
        <Tr
            rowData={data}
            setSelection={setSelectionList}
            selected={selected}
            onClick={updateQueryParams}
            checkBoxSelected={checked}
        >
            <td className={dataAttributes.NOTE.className}>
                <Tooltip
                    label={data.note}
                    position={"bottom"}
                >
                    <span>
                        {data.note}
                    </span>
                </Tooltip>
            </td>
            <td className={dataAttributes.TRANSACTEE.className}>
                {data.transactee.name}
            </td>
            <td className={dataAttributes.DATE.className}>
                {new Date(data.date*1000).toLocaleDateString()}
            </td>
            <td className={dataAttributes.CATEGORY.className}>
                {data.category.name}
            </td>
            <td className={dataAttributes.TYPE.className}>
                <TransactionTypeBadge type={data.type!} />
            </td>
            <td className={`${dataAttributes.AMOUNT.className} currency`}>
                {`$${data.amount}`}
            </td>
        </Tr>
    )
}




export default TransactionsTable;
