import React, { FC } from 'react';
import styles from './table.module.scss';

interface TableProps {
    children:React.ReactNode;
}

const Table= ({children}:TableProps) => {
    return (
        <div className={styles.Table}>
            <table cellSpacing={0} cellPadding={0}>
                {children}
            </table>
        </div>
    )
};

export default Table;
