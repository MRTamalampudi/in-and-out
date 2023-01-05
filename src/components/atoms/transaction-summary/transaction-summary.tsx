import React, { FC } from 'react';
import styles from './transaction-summary.module.scss';
import netflix from  "../../../assets/netflix.png"

interface TransactionSummaryProps {
    title:string,
    time:string,
    amount:string,
}

const TransactionSummary = ({title,time,amount}:TransactionSummaryProps) => {
  return(
      <div className={styles.TransactionSummary}>
          <div className={styles.logoAndContentContainer}>
              <img src={netflix} alt={""} className={styles.brandLogo} />
              <div className={styles.titleAndTimeContainer}>
                  <span className={styles.content}>{title}</span>
                  <span className={styles.time}>{time}</span>
              </div>
          </div>
          <div className={styles.amountAndInfoContainer}>
              <span className={styles.amount}>{amount}</span>
              <span className={styles.info}>info</span>
          </div>
      </div>
  )
}

export default TransactionSummary;
