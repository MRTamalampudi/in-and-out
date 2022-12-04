import React, { FC } from 'react';
import styles from './books.module.scss';
import {Button} from "@mantine/core";
import TransactionModal from "../../components/transaction-modal/transaction-modal";

interface BooksProps {}

const Books = (props:BooksProps) => {
  return(
      <div className={styles.Books}>
          <div className={styles.header}>
              <span className={styles.left}>Book name</span>
              <div className={styles.right}>
                  <Button size={"xs"} variant={"outline"} leftIcon={<i className={"fa-upload"}></i>}
                          color={"c-blue-gray"}>Import</Button>
                  <Button size={"xs"} variant={"outline"} leftIcon={<i className={"fa-download"}></i>}
                          color={"c-blue-gray"}>Export</Button>
                  <TransactionModal/>
              </div>
          </div>
      </div>
  )
}

export default Books;
