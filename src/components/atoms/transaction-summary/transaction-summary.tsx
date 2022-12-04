import React, { FC } from 'react';
import styles from './transaction-summary.module.scss';
import netflix from  "../../../assets/netflix.png"

interface TransactionSummaryProps {
    logo:string,
    title:string,
    time:string,
    amount:string,
}

const TransactionSummary = (props:TransactionSummaryProps) => {
  return(
      <div className={styles.TransactionSummary}>
          <div className={styles.logoAndContentContainer}>
              <img src={netflix} alt={""} className={styles.brandLogo} />
              <div className={styles.titleAndTimeContainer}>
                  <span className={styles.content}>{props.title}</span>
                  <span className={styles.time}>{props.time}</span>
              </div>
          </div>
          <div className={styles.amountAndInfoContainer}>
              <span className={styles.amount}>{props.amount}</span>
              <span className={styles.info}>info</span>
          </div>
      </div>
  )
}

export default TransactionSummary;
