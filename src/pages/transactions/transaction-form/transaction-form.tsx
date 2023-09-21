import React, {useEffect} from 'react';
import styles from './transaction-form.module.scss';
import {Button} from "@mantine/core";
import {useTransactionsConstants} from "constants/index";
import {Header} from "components";
import PaymentModeSelect from "./payment-mode-select";
import AmountInput from "./amount-input";
import {useForm} from "react-hook-form";
import {Transaction} from "model/transacation.model";
import TransactionTypeSelect from "./transaction-type-select";
import NoteInput from "./note-input";
import TransacteeSelect from "./transactee-select";
import DateTimeSelect from "./date-time-select";
import CategorySelect from "./category-select";
import {PaymentModeEnum, TransactionTypeEnum} from "../../../enums";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import TransactionService from "../../../service/transaction.service";
import {useDispatch} from "react-redux";
import {add, update} from "../../../redux/slice/transaction.slice";


interface TransactionFormProps {
    defaultValue:Partial<Transaction>,
}

const TransactionForm = ({defaultValue}:TransactionFormProps) => {



    useEffect(()=>{
        reset(defaultValue);
    },[defaultValue])

    const dispatch = useDispatch();
    const {
        transactionLocales,
        transactionsPlaceholder
    } = useTransactionsConstants();
    // @ts-ignore
    const transactionSchema = z.object<Transaction>({
        note: z.string().min(1,"Note is required"),
        date:z.date(),
        amount:z.number().min(1,{message:"Please enter amount"}),
        paymentMode:z.string().min(1,{message:"please enter payment mode"}),
        type:z.string().min(1),
        transactee:z.string(),
        category:z.string(),
        id:z.number().optional(),
    })

    const deaultVa:Partial<Transaction> = {
        date:new Date(),
        paymentMode:PaymentModeEnum.UPI,
        type:TransactionTypeEnum.CASH_IN,
    }

    const emptyValues:Partial<Transaction>= {
        paymentMode: PaymentModeEnum.UPI,
        type: TransactionTypeEnum.CASH_IN,
        amount: 0,
        date: new Date(),
        category: "",
        note: "",
        transactee: ""
    }

    const {control,
        handleSubmit,
        formState,
        setValue,
        reset,
        getValues
    }=useForm<Transaction>({
        mode:"onSubmit",
        defaultValues: deaultVa,
        resolver:zodResolver(transactionSchema),
    })
    
    const clearAll = () => {
      reset(emptyValues);
    }


    const onSubmit = (data:Transaction) => {
        const transactionService = new TransactionService();
        if(data.id){
            transactionService.update(data)
                .then(dispatch(update(data)))
        } else {
            transactionService.create(data)
                .then(dispatch(add(data)))
        }
    };


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
                  onClick={clearAll}
              >
                  Clear all
              </Button>
              <Button
                  size={"xs"}
                  type={"submit"}
                  onClick={handleSubmit(onSubmit)}
              >
                  {getValues("id") ? "Update" : "Add"}
              </Button>
          </div>
      </div>
  )
}



export default TransactionForm;
