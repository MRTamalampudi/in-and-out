import React, { FC } from 'react';
import styles from './transaction-type.module.scss';
import TransactionTypeConstants from '../../constants/transaction-type-constants';

interface TransactionTypeProps {
    type: TransactionTypes
}

export enum TransactionTypes  {
    CASH_IN = "Cash in",
    CASH_OUT =  "Cash out",
    LENT = "Lent",
    OWE =  "Owe",
}

const TransactionType = (
    {
type
    }:TransactionTypeProps
) => {

    const className:{[key in TransactionTypes]:string} = {
        [TransactionTypes.CASH_IN] : styles.cashIn,
        [TransactionTypes.CASH_OUT] : styles.cashOut,
        [TransactionTypes.LENT]: styles.lent,
        [TransactionTypes.OWE]: styles.owe
    }

    
    return (
        <div className={styles.container} >
            <span className={className[type]}>
                {type}
            </span>
        </div>
    )
}

export default TransactionType;
