import React, { FC } from 'react';
import styles from './transaction-type.module.scss';
import TransactionTypeEnum from '../../enums/transaction-type.enum';

interface TransactionTypeProps {
    type: TransactionTypeEnum
}
const TransactionTypeBadge = (
    {
type
    }:TransactionTypeProps
) => {

    const className:Partial<{[key in TransactionTypeEnum]:string}> = {
        [TransactionTypeEnum.CASH_IN] : styles.cashIn,
        [TransactionTypeEnum.CASH_OUT] : styles.cashOut,
        [TransactionTypeEnum.LENT]: styles.lent,
        [TransactionTypeEnum.OWE]: styles.owe
    }

    
    return (
        <div className={styles.container} >
            <span className={className[type]}>
                {type}
            </span>
        </div>
    )
}

export default TransactionTypeBadge;
