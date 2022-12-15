import React, { FC } from 'react';
import styles from './books.module.scss';
import {Button} from "@mantine/core";
import TransactionModal from "../../components/transaction-modal/transaction-modal";
import CashCard from "../../components/atoms/cash-card/cash-card";
import Table from "../../components/table/table";

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
          <div className={styles.body}>
              <div className={styles.cashCardComponents}>
                  <CashCard type={"cash-in"} amount={500}/>
                  <CashCard type={"cash-out"} amount={500}/>
                  <CashCard type={"balance"} amount={500}/>
              </div>
          </div>
          <Table>
              <thead>
              <tr>
                  <th>note</th>
                  <th>amount</th>
                  <th>date</th>
                  <th>party name</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>testing</td>
                  <td>5000</td>
                  <td>12-09-2000</td>
                  <td>Krishnasagar</td>
              </tr>
              <tr>
                  <td>testing</td>
                  <td>5000</td>
                  <td>12-09-2000</td>
                  <td>Krishnasagar</td>
              </tr>
              <tr>
                  <td>testing</td>
                  <td>5000</td>
                  <td>12-09-2000</td>
                  <td>Krishnasagar</td>
              </tr>
              </tbody>
          </Table>
      </div>
  )
}

export default Books;
