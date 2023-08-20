import React, { FC } from 'react';
import styles from './transactions.module.scss';
import Summary from "../../components/summary/summary";
import Table from "../../components/table";
import TransactionForm from "./transaction-form";
import TransactionsTable from "./transactions-table";

interface TransactionsProps {}

const Transactions = (
    {}:TransactionsProps
) => {
  return (
      <div className={styles.Transactions}>
          <div className={styles.top}>
              <Summary/>
          </div>
          <div className={styles.bottom}>
              <TransactionsTable/>
              <TransactionForm/>
          </div>
      </div>
  )
}

export default Transactions;
