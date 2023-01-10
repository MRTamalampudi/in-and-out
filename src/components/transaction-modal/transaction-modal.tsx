import React, {useState} from 'react';
import styles from './transaction-modal.module.scss';
import {Button, Drawer, Tabs} from "@mantine/core";
import {PrimaryTerms} from "../../enums/primary-terms";
import {TransactionForm} from "./transaction-form";
import {Transacation} from "../../model/transacations.model";

interface TransactionModalProps {
    openButton?:React.ReactNode,
    isEdit?:boolean,
    trasaction?:Transacation,
    transactionType?:PrimaryTerms.CASH_IN|PrimaryTerms.CASH_OUT,

}

const TransactionModal = ({trasaction,isEdit=false,openButton,transactionType=PrimaryTerms.CASH_IN}:TransactionModalProps) => {
    const [open,setOpen]=useState<boolean>(false);
    const modalState = () => {setOpen(prevState => !prevState)}
    const OpenButton = () => {
      return (<Button size={'xs'}
                      leftIcon={<i className={"fa-add-circle"}/>} >
          Add Transaction</Button>)
    }
    return(
        <div className={styles.TransactionModal}>
            <div onClick={modalState}>
                {openButton || <OpenButton/>}
            </div>
            <Drawer opened={open}
                    size={"xl"}
                    withCloseButton={false}
                    onClose={modalState}
                    position={"right"}>
                <Tabs defaultValue={transactionType}>
                    <Tabs.List grow={true}>
                        <Tabs.Tab value={PrimaryTerms.CASH_IN} >{PrimaryTerms.CASH_IN}</Tabs.Tab>
                        <Tabs.Tab value={PrimaryTerms.CASH_OUT} color={'c-red'}>{PrimaryTerms.CASH_OUT}</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value={PrimaryTerms.CASH_IN}>
                        <TransactionForm transaction={trasaction} transactionType={PrimaryTerms.CASH_IN} setOpen={setOpen}/>
                    </Tabs.Panel>
                    <Tabs.Panel value={PrimaryTerms.CASH_OUT}>
                        <TransactionForm transaction={trasaction} transactionType={PrimaryTerms.CASH_OUT} setOpen={setOpen}/>
                    </Tabs.Panel>
                </Tabs>
            </Drawer>
        </div>
    )
}

export default TransactionModal;
