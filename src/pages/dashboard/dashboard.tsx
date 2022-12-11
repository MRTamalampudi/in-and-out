import React, { FC } from 'react';
import styles from './dashboard.module.scss';
import LineGraph from "../../components/line-graph/line-graph";

interface DashboardProps {}

const Dashboard = (props:DashboardProps) => {
  return(
      <div className={styles.Dashboard}>
          <div className={styles.header}>
              <span>Hi, Manikantareddy</span>
          </div>
          <div className={styles.body}>
              <LineGraph/>
          </div>
      </div>
  )
}

export default Dashboard;
