import React, {FC, useState} from 'react';
import styles from './demo.module.scss';
import TransactionTypeCard from "../../components/transaction-type-card";

interface DemoProps {}

const Demo = () => {

    return (
        <div className={styles.Demo}>
            <TransactionTypeCard type={"Balance"} amount={500}/>
        </div>
    )
}

export default Demo;
