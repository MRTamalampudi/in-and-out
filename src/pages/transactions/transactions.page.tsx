import React from "react";
import styles from "./transactions.module.scss";
import { TransactionTypeCard } from "components";
import { TransactionTypeEnum } from "enum";
import Modal from "./transaction-form/modal";
import TransactionTable from "pages/transactions/transaction-table/transaction-table";
import { transactionSummaryQueryOptions } from "service/react-query-hooks/transaction-summary.query";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createLazyRoute } from "@tanstack/react-router";

interface TransactionsProps {}

const TransactionsPage = (
    {}:TransactionsProps
) => {

    const {data} = useSuspenseQuery(transactionSummaryQueryOptions);

    return (
      <div className={styles.Transactions}>
          <div className={styles.top}>
              <TransactionTypeCard type={TransactionTypeEnum.CASH_IN} amount={data?.cashIn || 0}/>
              <TransactionTypeCard type={TransactionTypeEnum.CASH_OUT} amount={data?.cashOut || 0}/>
              <TransactionTypeCard type={TransactionTypeEnum.LENT} amount={data?.lent || 0}/>
              <TransactionTypeCard type={TransactionTypeEnum.OWE} amount={data?.owe || 0}/>
              <TransactionTypeCard type={TransactionTypeEnum.BALANCE} amount={(data?.cashIn || 0) - ((data?.cashOut || 0) + (data?.lent || 0))}/>
          </div>
          <div className={styles.bottom}>
              <TransactionTable/>
          </div>
          <div className={"absolute z-10 bottom-8 right-8"}>
              <Modal/>
          </div>
      </div>
  )
}

export const TransactionLazyRoute = createLazyRoute("/transactions")({
    component:TransactionsPage
});
