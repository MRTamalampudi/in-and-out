import React from 'react';
import styles from './transaction-form.module.scss';
import {Button} from "@mantine/core";
import {useTransactionsConstants} from "constants/index";
import {Header} from "components";
import {useSearchParams} from "react-router-dom";
import PaymentModeSelect from "./payment-mode-select";
import AmountInput from "./amount-input";
import {useForm} from "react-hook-form";
import {Transaction} from "model/transacations.model";
import TransactionTypeSelect from "./transaction-type-select";
import NoteInput from "./note-input";
import TransacteeSelect from "./transactee-select";
import DateTimeSelect from "./date-time-select";
import CategorySelect from "./category-select";
import {PaymentModeEnum, TransactionTypeEnum} from "../../../enums";

interface TransactionFormProps {}

const TransactionForm = ({}:TransactionFormProps) => {

    const [searchParams,setSearchParams]=useSearchParams();

    const {
        transactionLocales,
        transactionsPlaceholder
    } = useTransactionsConstants();

    const deaultVa:Transaction = new Transaction();
    deaultVa.date=new Date();
    deaultVa.paymentMode= PaymentModeEnum.UPI;
    deaultVa.type= TransactionTypeEnum.CASH_IN;



    const {control,handleSubmit}=useForm<Transaction>({
        mode:"onSubmit",
        defaultValues:deaultVa,
    })

    const onSubmit = (data:Transaction) => console.log(data);


  return (
      <div className={styles.TransactionForm}>
          <Header
              title={"Edit transaction"}
          />
          <div
              className={styles.body}
          >
              <NoteInput
                  label={transactionLocales.NOTE}
                  placeholder={transactionsPlaceholder.NOTE}
                  control={control}
                  name={"note"}
              />
              <div
                  className={styles.col2}
              >
                  <AmountInput
                      label={transactionLocales.AMOUNT}
                      placeholder={transactionsPlaceholder.AMOUNT}
                      control={control}
                      name={"amount"}
                  />
                  <TransactionTypeSelect
                      placeholder={transactionsPlaceholder.TRANSACTION_TYPE}
                      label={transactionLocales.TRANSACTION_TYPE}
                      control={control}
                      name={"type"}
                  />
              </div>
              <TransacteeSelect
                  label={transactionLocales.TRANSACTEE}
                  placeholder={transactionsPlaceholder.TRANSACTEE}
                  control={control}
                  name={"transactee"}
              />
              <DateTimeSelect
                  label={transactionLocales.TIME_DATE}
                  placeholder={transactionLocales.TIME_DATE}
                  control={control}
                  name={"date"}
              />
              <div
                  className={styles.col2}
              >
                  <CategorySelect
                      label={transactionLocales.CATEGORY}
                      placeholder={transactionsPlaceholder.CATEGORY}
                      control={control}
                      name={"category"}
                  />
                  <PaymentModeSelect
                      control={control}
                      name={"paymentMode"}
                      label={transactionLocales.PAYMENT_MODE}
                      placeholder={transactionsPlaceholder.PAYMENT_MODE}
                  />
              </div>
          </div>
          <div
              className={styles.footer}
          >
              <Button
                  size={"xs"}
                  variant={"outline"}
              >
                  Cancel
              </Button>
              <Button
                  size={"xs"}
                  type={"submit"}
                  onClick={handleSubmit(onSubmit)}
              >
                  Update
              </Button>
          </div>
      </div>
  )
}



export default TransactionForm;
