import React from 'react';
import styles from './demo.module.scss';
import TransactionTypeCard from "../../components/transaction-type-card";
import {TransactionTypeEnum} from "../../enums";

interface DemoProps {}

const Demo = () => {

    return (
        <div className={styles.Demo}>
            <TransactionTypeCard type={TransactionTypeEnum.BALANCE} amount={500}/>
        </div>
    )
}

export default Demo;
