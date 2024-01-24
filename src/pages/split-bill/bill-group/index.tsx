import React, { FC } from 'react';
import styles from './bill-group.module.scss';
import GroupBillHeader from "pages/split-bill/group-bill-header";
import BillsTable from "pages/split-bill/bills-table/bills-table";

interface BillGroupProps {}

const BillGroup: FC<BillGroupProps> = () => (
  <div className={styles.BillGroup}>
      <div className={styles.header}>
          <GroupBillHeader/>
      </div>
      <div className={styles.body}>
          <BillsTable/>
      </div>
  </div>
);

export default BillGroup;
