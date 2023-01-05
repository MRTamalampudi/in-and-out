import React, { FC } from 'react';
import styles from './summary-card.module.scss';
import TransactionSummary from "../transaction-summary/transaction-summary";
import {Select} from "@mantine/core";

interface SummaryCardProps {
    title:string;
    children:React.ReactNode;
    seeAll?:boolean;
    subtitle?:string;
}



const Card = ({title,children,seeAll=false,subtitle}:SummaryCardProps) => {
  return (
      <div className={styles.SummaryCard}>
          <div className={styles.header}>
              <div className={styles.left}>
                  <span className={styles.title}>{title}</span>
                  <span className={styles.subtitle}>( {subtitle} )</span>
              </div>
              <div className={styles.right}>
                  {seeAll ? <span className={styles.seeAll}>see all</span> : null}
              </div>
          </div>
          <div className={styles.body}>
              {children}
          </div>
      </div>
  )
}

const Filters = () => {
  return (
      <Select
          placeholder="Pick one"
          size={"xs"}
          rightSection={<i className={"fa-arrow-down"}/>}
          data={[
              { value: 'react', label: 'React' },
              { value: 'ng', label: 'Angular' },
              { value: 'svelte', label: 'Svelte' },
              { value: 'vue', label: 'Vue' },
          ]}/>
  )
};

const Search = () => {
    return (
        <div>search
        </div>
    )
}

export default Card;
