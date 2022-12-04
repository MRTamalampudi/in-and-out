import React, { FC } from 'react';
import styles from './dashboard.module.scss';

interface DashboardProps {}

const Dashboard = (props:DashboardProps) => {
  return(
      <div className={styles.Dashboard}>
          Dashbard
      </div>
  )
}

export default Dashboard;
