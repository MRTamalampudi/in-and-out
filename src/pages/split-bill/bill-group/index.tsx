import React, { FC } from 'react';
import styles from './bill-group.module.scss';
import GroupBillHeader from "pages/split-bill/group-bill-header";
import BillsTable from "pages/split-bill/bills-table/bills-table";
import { useSearch } from "@tanstack/react-router";
import { splitBillRoute } from "pages/split-bill/routes";
import { useGetSplitBillGroup } from "service/react-query-hooks/split-bill-group.query";

interface BillGroupProps {}

const BillGroup = () => {

    return (
        <div className={styles.BillGroup}>
            <div className={styles.header}>
                <GroupBillHeader/>
            </div>
            <div className={styles.body}>
                <BillsTable/>
            </div>
        </div>
    )
};

export default BillGroup;
