import React, { FC } from 'react';
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

interface DashboardProps {}

const Dashboard = (props:DashboardProps) => {
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
                              <Select
                                  label="Your favorite framework/library"
                                  placeholder="Pick one"
                                  size={"xs"}
                                  rightSection={<i className={"fa-arrow-down"}/>}
                                  data={[
                                      { value: 'react', label: 'React' },
                                      { value: 'ng', label: 'Angular' },
                                      { value: 'svelte', label: 'Svelte' },
                                      { value: 'vue', label: 'Vue' },
                                  ]}/>
                              <Select
                                  label="Your favorite framework/library"
                                  placeholder="Pick one"
                                  size={'xs'}
                                  rightSection={<i className={"fa-arrow-down"}/>}
                                  data={[
                                      { value: 'react', label: 'React' },
                                      { value: 'ng', label: 'Angular' },
                                      { value: 'svelte', label: 'Svelte' },
                                      { value: 'vue', label: 'Vue' },
                                  ]}/>
                          </div>
                          <div>
                              <Select
                                  label="Your favorite framework/library"
                                  placeholder="Pick one"
                                  size={'xs'}
                                  rightSection={<i className={"fa-arrow-down"}/>}
                                  data={[
                                      { value: 'react', label: 'React' },
                                      { value: 'ng', label: 'Angular' },
                                      { value: 'svelte', label: 'Svelte' },
                                      { value: 'vue', label: 'Vue' },
                                  ]}/>
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
