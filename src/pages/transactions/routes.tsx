import TransactionsPage from "./transactions.page";
import {Route} from "react-router";
import React from "react";


export const TRANSACTIONS_SLUGS = {
    TRANSACTION_ID:"transactionId",
}

const TransactionRoutes = () => {
  return (
      <>
          <Route path={`:${TRANSACTIONS_SLUGS.TRANSACTION_ID}`} element={<TransactionsPage/>}/>
      </>
  )
}

export default TransactionRoutes;