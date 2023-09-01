import React, {FC, useState} from 'react';
import styles from './demo.module.scss';
import ModalTemplate from "../../components/modal-template";
import {TextInput} from "@mantine/core";
import {notificationOutline} from "../../assets/icons";
import Table from "../../components/table";
import GroupForm from "pages/split-bill/group-form";
import LentForm from "../split-bill/lent-form";
import TransactionTypeCard from "../../components/transaction-type-card";

interface DemoProps {}

const Demo = () => {

    return (
        <div className={styles.Demo}>
            <TransactionTypeCard type={"Balance"} amount={500}/>
            <div className={styles.cashIn}>
                <div className={styles.insideBorder}/>
                <div className={styles.body}>
                    <div className={styles.title}>
                        Cash in
                    </div>
                    <div className={styles.content}>
                        $ 200
                    </div>
                </div>
            </div>
            <div className={styles.cashOut}>
                <div className={styles.insideBorder}/>
                <div className={styles.body}>
                    <div className={styles.title}>
                        Cash out
                    </div>
                    <div className={styles.content}>
                        $ 200
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo;
