import React from 'react';
import styles from './transactions.module.scss';
import TransactionsTable from "./transactions-table";
import TransactionForm from "./transaction-form";
import {TransactionTypeCard} from "components";
import {TransactionTypeEnum} from "enum";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "redux";
import {TRANSACTIONS_SLUGS} from "./routes";

interface TransactionsProps {}

const TransactionsPage = (
    {}:TransactionsProps
) => {

    const {[TRANSACTIONS_SLUGS.TRANSACTION_ID]:transactionId}=useParams();

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
              <TransactionForm/>
          </div>
      </div>
  )
}

export default TransactionsPage;
