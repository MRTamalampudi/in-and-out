import React, { FC } from 'react';
import styles from './bill-group.module.scss';
import GroupBillHeader from "pages/split-bill/group-bill-header";
import Bills from "../bills";

interface BillGroupProps {}

const BillGroup: FC<BillGroupProps> = () => (
  <div className={styles.BillGroup}>
      <div className={styles.header}>
          <GroupBillHeader/>
      </div>
      <div className={styles.body}>
          <Bills/>
      </div>
  </div>
);

export default BillGroup;
