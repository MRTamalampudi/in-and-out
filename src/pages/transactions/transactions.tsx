import React, { FC } from 'react';
import styles from './transactions.module.scss';
import Summary from "../../components/summary/summary";
import Table from "../../components/table";
import TransactionForm from "./transaction-form";
import TransactionsTable from "./transactions-table";
import TransactionTypeCard from "../../components/transaction-type-card";

interface TransactionsProps {}

const Transactions = (
    {}:TransactionsProps
) => {
  return (
      <div className={styles.Transactions}>
          <div className={styles.top}>
              <TransactionTypeCard type={"Cash in"} amount={300}/>
              <TransactionTypeCard type={"Cash out"} amount={50}/>
              <TransactionTypeCard type={"Lent"} amount={50}/>
              <TransactionTypeCard type={"Owe"} amount={50}/>
              <TransactionTypeCard type={"Balance"} amount={200}/>
          </div>
          <div className={styles.bottom}>
              <TransactionsTable/>
              <TransactionForm/>
          </div>
      </div>
  )
}

export default Transactions;
