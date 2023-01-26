import React, {FC, useRef, useState} from 'react';
import styles from './books.module.scss';
import {Button, Input, Loader, TextInput} from "@mantine/core";
import TransactionModal from "../../components/transaction-modal/transaction-modal";
import CashCard from "../../components/atoms/cash-card/cash-card";
import Table from "../../components/table/table";
import {TransactionsTable} from "./transactions-table";
import {Cash_Flow, Payment_Mode, Period} from "../../enums/filters";


interface BooksProps {}


// const periodData = Object.values(Period)
//     .filter((value) => value!='Period')
//     .map((data)=>({value:data,label:data}))
//
// const paymentModeDate = Object.values(Payment_Mode)
//     .filter((value) => value!='Payment Mode')
//     .map((data)=>({value:data,label:data}))
//
// const cashFlowData = Object.values(Cash_Flow)
//     .filter((value) => value!='Cash Flow')
//     .map((data)=>({value:data,label:data}))

const BookName = () => {
    const [isEdit,setIsEdit] =  useState<boolean>(false)
    const bookName = useRef(null)
    const edit = () => {
      setIsEdit((prevState) => !prevState)
        // @ts-ignore
        bookName.current.focus()
        console.log(bookName)
    }

    const save = () => {
      setIsEdit((prevState) => !prevState)
    }
    return (
        <div ref={bookName} className={styles.right}>
            <span className={styles.left} contentEditable={isEdit}>Book name</span>
            {isEdit ?
                <Loader size={'xs'} variant={'dots'}/> :
                <i className={`${styles.icon} fa-edit`} onClick={edit}/> }
        </div>
    )
}

const Books = (props:BooksProps) => {
  return(
      <div className={styles.Books}>
          <div className={styles.header}>
              <BookName/>
              <div className={styles.right}>
                  <TextInput icon={<i className={`fa-search`} />} size={"xs"} />
                  <TransactionModal/>
              </div>
          </div>
          <div className={styles.body}>
              <div className={styles.cashCardComponents}>
                  <CashCard type={"cash-in"} amount={500}/>
                  <CashCard type={"cash-out"} amount={500}/>
                  <CashCard type={"balance"} amount={500}/>
              </div>
              <div className={styles.table}>
                  <TransactionsTable/>
              </div>
          </div>
      </div>
  )
}

export default Books;
