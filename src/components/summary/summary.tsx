import React, { FC } from 'react';
import styles from './summary.module.scss';

interface SummaryProps {}

const Summary = ({}:SummaryProps) => {
    return (
        <div
            className={styles.Summary}>
            <div className={styles.container}>
                <span className={styles.label}>
                    Cash in
                </span>
                <span className={styles.value}>
                    $500
                </span>
            </div>
            <span>
                -
            </span>
            <div className={styles.container}>
                <span className={styles.label}>
                    Cash out
                </span>
                <span className={styles.value}>
                    $500
                </span>
            </div>
            <span>
                -
            </span>
            <div className={styles.container}>
                <span className={styles.label}>
                    Lent
                </span>
                <span className={styles.value}>
                    $500
                </span>
            </div>
            <span>
                =
            </span>
            <div className={styles.container}>
                <span className={styles.label}>
                    Balance
                </span>
                <span className={styles.value}>
                    $500
                </span>
            </div>
            <span>
                |
            </span>
            <div className={styles.container}>
                <span className={styles.label}>
                    Owes
                </span>
                <span className={styles.value}>
                    $500
                </span>
            </div>
        </div>
    )
}

export default Summary;
