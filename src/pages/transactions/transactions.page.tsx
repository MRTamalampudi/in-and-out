import React from "react";
import styles from "./transactions.module.scss";
import TransactionsTable from "./transactions-table";
import { TransactionTypeCard } from "components";
import { TransactionTypeEnum } from "enum";
import Modal from "./transaction-form/modal";

interface TransactionsProps {}

const TransactionsPage = (
    {}:TransactionsProps
) => {

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
          </div>
          <Modal/>
      </div>
  )
}

export default TransactionsPage;
