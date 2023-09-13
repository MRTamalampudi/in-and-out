import React, {Dispatch, SetStateAction, useMemo, useState} from 'react';
import {Table} from "components";
import {Checkbox, Tooltip} from "@mantine/core";
import {fakerEN_IN} from "@faker-js/faker";
import {selectAllHandler, selectionHandler} from "../../../utils/selectionHandler";
import Thead from "../../../components/table/thead";
import ActionsRow from "../../../components/table/actions-row";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../../../redux/slice/transaction-slice";
import {RootState} from "../../../redux";
import {Link, useParams, useSearchParams} from "react-router-dom";
import {useTransactionsConstants} from "constants/index";
import TransactionTypeBadge from "../../../components/transaction-type";
import {PaymentModeEnum, TransactionTypeEnum} from "enums";
import {Transaction} from "../../../model/transacations.model";
import {Tr} from "../../../components/table/tbody";
import {useNavigate} from "react-router";

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

const TransactionsTable = () => {

    const dispatch = useDispatch();
    const [selectionList,setSelectionList] = useState<number[]>([]);

    let data:Transaction[] =[];

    useMemo(()=>{
        const data_:Transaction[] = [];
        for (let i = 0; i < 20; i++) {
            const transaction:Transaction = new Transaction();
            transaction.id = i;
            transaction.note = fakerEN_IN.word.words({count:{min:3,max:5}});
            transaction.transactee = fakerEN_IN.person.firstName();
            transaction.category = fakerEN_IN.commerce.department();
            transaction.date =  fakerEN_IN.date.anytime();
            transaction.type = TransactionTypeEnum.OWE;
            transaction.amount = parseInt(fakerEN_IN.finance.amount({min:100,max:500,dec:0}));
            transaction.paymentMode = PaymentModeEnum.UPI;
            data_.push(transaction)
        }
        dispatch(setProducts(data_))
    },[])

    data = useSelector((state:RootState)=> state.transactions);


    const {transactionLocales} = useTransactionsConstants();


    const Heading = () => {
      return (
          <Thead
              data={data}
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
            title={transactionLocales.TRANSACTIONS}
            totalElements={20}
        >
            {
                selectionList.length ?
                    <ActionsRow
                        checked={selectionList.length == data.length}
                        selectedCount={selectionList.length}
                        data={data}
                        setSelection={setSelectionList}
                    /> :
                    <Heading/>
            }
            <tbody>
            {
                data.map(transaction=> {
                   return (
                       <Transaction_
                           key={transaction.id}
                           transaction={transaction}
                           setSelectionList={setSelectionList}
                           checkBoxSelected={selectionList.indexOf(transaction.id)>-1}
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
    checkBoxSelected:boolean;
}
const Transaction_ = (
    {
        transaction,
        setSelectionList,
        checkBoxSelected,
    }:TransactionProps) =>{

    const {transactionId}= useParams();
    const navigate = useNavigate();

    function updateQueryParams() {
        navigate(transaction.id?.toString());
    }

    const selected = transactionId == transaction.id?.toString();


    return (
        <Tr
            rowData={transaction}
            setSelection={setSelectionList}
            selected={selected}
            onClick={updateQueryParams}
            checkBoxSelected={checkBoxSelected}
        >
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
                {transaction.date.toLocaleDateString()}
            </td>
            <td className={dataAttributes.CATEGORY.className}>
                {transaction.category}
            </td>
            <td className={dataAttributes.TYPE.className}>
                <TransactionTypeBadge type={transaction.type!} />
            </td>
            <td className={`${dataAttributes.AMOUNT.className} currency`}>
                {transaction.amount}
            </td>
        </Tr>
    )
}




export default TransactionsTable;
