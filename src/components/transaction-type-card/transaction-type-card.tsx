import React, { FC } from 'react';
import styles from './transaction-type-card.module.scss';
import {TransactionType} from "types";
import TransactionTypeConstants from "../../constants/transaction-type-constants";
import TransactionsConstants from "../../pages/transactions/transactions-constants";

interface TransactionTypeCardProps {
    type:TransactionType;
    amount:number,
}

const TransactionTypeCard = (
    {
        type,
        amount
    }:TransactionTypeCardProps
) => {
    const className = {
        [TransactionTypeConstants.CASH_IN]: {
            name: TransactionTypeConstants.CASH_IN,
            className: styles.cashIn,
        },
        [TransactionTypeConstants.CASH_OUT]: {
            name: TransactionTypeConstants.CASH_OUT,
            className: styles.cashOut,
        },
        [TransactionTypeConstants.BALANCE]: {
            name: TransactionTypeConstants.BALANCE,
            className: styles.balance,
        },
        [TransactionTypeConstants.LENT]: {
            name: TransactionTypeConstants.LENT,
            className: styles.lent,
        },
        [TransactionTypeConstants.OWE]: {
            name: TransactionTypeConstants.OWE,
            className: styles.owe,
        },
    };

    return (
      <div className={className[type].className}>
          <div className={styles.insideBorder}/>
          <div className={styles.body}>
              <div className={styles.title}>
                  {className[type].name}
              </div>
              <div className={styles.content}>
                  {`$ ${amount}`}
              </div>
          </div>
      </div>
  )
}

export default TransactionTypeCard;
