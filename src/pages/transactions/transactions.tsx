import React from 'react';
import styles from './transactions.module.scss';
import TransactionsTable from "./transactions-table";
import TransactionForm from "./transaction-form";
import {TransactionTypeCard} from "components";
import {PaymentModeEnum, TransactionTypeEnum} from "../../enums";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux";
import {Transaction} from "../../model/transacations.model";

interface TransactionsProps {}

const Transactions = (
    {}:TransactionsProps
) => {

    const {transactionId}=useParams();

    const deaultVa:Partial<Transaction> = {
        date:new Date(),
        paymentMode:PaymentModeEnum.UPI,
        type:TransactionTypeEnum.CASH_IN,
    }



    const da = useSelector((state:RootState)=>state.transactions.find(transaction=>transaction.id?.toString() == transactionId));

    const dd = () => {
        console.log(da || deaultVa)
      return da || deaultVa;
    }

    console.log(transactionId)



  return (
      <div className={styles.Transactions}>
          <div className={styles.top}>
              <TransactionTypeCard type={TransactionTypeEnum.CASH_IN} amount={300}/>
              <TransactionTypeCard type={TransactionTypeEnum.CASH_OUT} amount={50}/>
              <TransactionTypeCard type={TransactionTypeEnum.LENT} amount={50}/>
              <TransactionTypeCard type={TransactionTypeEnum.OWE} amount={50}/>
              <TransactionTypeCard type={TransactionTypeEnum.BALANCE} amount={200}/>
          </div>
          <div className={styles.bottom}>
              <TransactionsTable/>
              <TransactionForm defaultValue={dd()}/>
          </div>
      </div>
  )
}

export default Transactions;
