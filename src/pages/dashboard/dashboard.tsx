import React, {FC, useState} from 'react';
import styles from './dashboard.module.scss';
import LineGraph from "../../components/line-graph/line-graph";
import {Select} from "@mantine/core";
import CashCard from "../../components/atoms/cash-card/cash-card";
import {SubscriptionsDashboard} from "./subscriptions";
import {BillsDashboard} from "./bills";
import CategoryCard from "../../components/atoms/category-card/category-card";
import {CategoriesSummary} from "./categories";
import TransactionSummary from "../../components/atoms/transaction-summary/transaction-summary";
import {TransactionsSummary} from "./transactions";
import {Period} from "../../enums/filters";

interface DashboardProps {}

const Dashboard = (props:DashboardProps) => {

    const [timePeriod,setTimePeriod]=useState<string>(Period.LAST_7_DAYS);

    const SelectPeriod = () => {
        let data = Object.values(Period)
            .filter((value) => value!='Period')
            .map((data)=>({value:data,label:data}))
        return (
            <Select data={data} value={timePeriod} onChange={(value)=>setTimePeriod(value!)} label={Period.PERIOD} size={'xs'}/>
        )
    }
    // const SelectBooks = () => {
    //     return (
    //     )
    // }
  return(
      <div className={styles.Dashboard}>
          <div className={styles.header}>
              <span>Hi, Manikantareddy</span>
              <i className={`fa-account-circle`}></i>
          </div>
          <div className={styles.body}>
              <div className={styles.leftContainer}>
                  <div className={styles.top}>
                      <div className={styles.filtersContainer}>
                          <div className={styles.right}>
                              <SelectPeriod/>
                          </div>
                      </div>
                      <div className={styles.cashCardsContainer}>
                          <CashCard type={"cash-in"} amount={5000}/>
                          <CashCard type={"cash-out"} amount={5000}/>
                          <CashCard type={"balance"} amount={5000}/>
                      </div>
                      <div className={styles.graphContainer}>
                          <LineGraph/>
                      </div>
                  </div>
                  <div className={styles.bottom}>
                      <div className={styles.categoryAndTransactionConatainer}>
                              <CategoriesSummary/>
                          <div>
                              <TransactionsSummary/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={styles.rightContainer}>
                  <SubscriptionsDashboard/>
                  <BillsDashboard/>
              </div>
          </div>
      </div>
  )
}

export default Dashboard;
