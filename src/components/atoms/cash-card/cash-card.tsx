import React from 'react';
import styles from './cash-card.module.scss';
import {PrimaryTerms} from "../../../enums";


interface CashCardProps {
    type: "cash-in"|"cash-out"|"balance";
    amount:number;
}
const getType = (type:CashCardProps['type']) => {
    switch (type){
        case "cash-in":
            return  [styles.cashIn,PrimaryTerms.CASH_IN];
        case "cash-out":
            return  [styles.cashOut,PrimaryTerms.CASH_OUT];
        case "balance":
            return  [styles.balance,PrimaryTerms.BALANCE];
    }
}

const CashCard = (props:CashCardProps) => {
    const [style,title]=getType(props.type);
  return (
      <div className={`${styles.CashCard} ${style}`}>
          <span className={styles.title}>{title}</span>
          <span className={styles.amount}>$ 5000</span>
          <span className={styles.bgDecor}>{title}</span>
      </div>
  )
}

export default CashCard;
