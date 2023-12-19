import React, { FC } from 'react';
import styles from './bill-group.module.scss';
import GroupBillHeader from "pages/split-bill/group-bill-header";

interface BillGroupProps {}

const BillGroup: FC<BillGroupProps> = () => (
  <div className={styles.BillGroup}>
      <div className={styles.header}>
          <GroupBillHeader/>
      </div>
      <div className={styles.body}>

      </div>
  </div>
);

export default BillGroup;
