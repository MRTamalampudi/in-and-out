import React, { FC } from 'react';
import styles from './transaction-type-card.module.scss';
import TransactionTypeEnum from "enums/transaction-type-enum";

interface TransactionTypeCardProps {
    type:TransactionTypeEnum;
    amount:number,
}

const TransactionTypeCard = (
    {
        type,
        amount
    }:TransactionTypeCardProps
) => {
    const className = {
        [TransactionTypeEnum.CASH_IN]: {
            name: TransactionTypeEnum.CASH_IN,
            className: styles.cashIn,
        },
        [TransactionTypeEnum.CASH_OUT]: {
            name: TransactionTypeEnum.CASH_OUT,
            className: styles.cashOut,
        },
        [TransactionTypeEnum.BALANCE]: {
            name: TransactionTypeEnum.BALANCE,
            className: styles.balance,
        },
        [TransactionTypeEnum.LENT]: {
            name: TransactionTypeEnum.LENT,
            className: styles.lent,
        },
        [TransactionTypeEnum.OWE]: {
            name: TransactionTypeEnum.OWE,
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
