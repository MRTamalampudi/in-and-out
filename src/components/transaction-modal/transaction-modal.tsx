import React, { FC } from 'react';
import styles from './transaction-modal.module.scss';

interface TransactionModalProps {}

const TransactionModal: FC<TransactionModalProps> = () => (
  <div className={styles.TransactionModal}>
    TransactionModal Component
  </div>
);

export default TransactionModal;
