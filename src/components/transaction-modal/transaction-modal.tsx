import React, {FC, useState} from 'react';
import styles from './transaction-modal.module.scss';
import {Button, Drawer, Tabs} from "@mantine/core";
import {PrimaryTerms} from "../../enums";
import {CashInForm} from "./cash-in-form";
import {CashOutForm} from "./cash-out-form";

interface TransactionModalProps {}

const TransactionModal = (props:TransactionModalProps) => {
    const [open,setOpen]=useState<boolean>(false);
    const modalState = () => {setOpen(prevState => !prevState)}
    return(
        <div className={styles.TransactionModal}>
            <Button size={'xs'}
                    leftIcon={<i className={"fa-add-circle"}/>}
                    onClick={modalState}>
                Add Transaction</Button>
            <Drawer opened={open}
                    size={"xl"}
                    withCloseButton={false}
                    onClose={modalState}
                    position={"right"}>
                <Tabs defaultValue={PrimaryTerms.CASH_IN}>
                    <Tabs.List grow={true}>
                        <Tabs.Tab value={PrimaryTerms.CASH_IN} >{PrimaryTerms.CASH_IN}</Tabs.Tab>
                        <Tabs.Tab value={PrimaryTerms.CASH_OUT} color={'c-red'}>{PrimaryTerms.CASH_OUT}</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value={PrimaryTerms.CASH_IN}>
                        <CashInForm/>
                    </Tabs.Panel>
                    <Tabs.Panel value={PrimaryTerms.CASH_OUT}>
                        <CashOutForm/>
                    </Tabs.Panel>
                </Tabs>
            </Drawer>
        </div>
    )
}

export default TransactionModal;
