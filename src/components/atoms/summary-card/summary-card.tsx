import React, { FC } from 'react';
import styles from './summary-card.module.scss';
import TransactionSummary from "../transaction-summary/transaction-summary";

interface SummaryCardProps {}

const SummaryCard = (props:SummaryCardProps) => {
  return (
      <div className={styles.SummaryCard}>
          <div className={styles.header}>
              <span className={styles.title}>Subscriptions</span>
              <span className={styles.seeAll}>see all</span>
          </div>
          <TransactionSummary time={"Expires Today"}
                              logo={""} title={"Netflix"} amount={"$200"}/>
          <TransactionSummary time={"Expires Today"}
                              logo={""} title={"Netflix"} amount={"$200"}/>
      </div>
  )
}

export default SummaryCard;
