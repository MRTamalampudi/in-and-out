import React, {forwardRef, useEffect} from 'react';
import styles from './transaction-form.module.scss';
import {Button, Select, TextInput} from "@mantine/core";
import {useTransactionsConstants} from "constants/index";
import {TransactionTypeEnum} from "enums";
import { DateTimePicker} from "@mantine/dates";
import {Header, TransactionTypeBadge} from "components";
import {PaymentModeEnum} from "../../../enums";
import CustomSelectItem from "../../../components/custom-select-item";
import {netflix} from "../../../assets";
import {PaymentModeAttributes} from "../../../enumAttributes";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux";
import {useSearchParams} from "react-router-dom";
import {FieldValues, useForm} from "react-hook-form";
import {mode} from "d3";
import {ErrorIcon} from "../../../components/icons";
import FormError from "../../../components/form-error";
import PaymentModeSelect from "./payment-mode-select";

interface TransactionFormProps {}

const TransactionForm = ({}:TransactionFormProps) => {

    const [searchParams,setSearchParams]=useSearchParams();
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm({mode: "onSubmit"});

    const {
        transactionLocales,
        transactionsPlaceholder
    } = useTransactionsConstants();

    const noteValidation = {
        ...register(transactionLocales.NOTE,{
            required:true,
            maxLength:{
                value:2,
                message:"Max 2 length"
            }
        })
    }

    const paymentModeValidation = {
        ...register(transactionLocales.PAYMENT_MODE,{
            required:{
                value:true,
                message:"Mandatory"
            }
        })
    }

    const TransactionTypeSelect = () => {

        // @ts-ignore
        const data: { value: TransactionTypeEnum; label: TransactionTypeEnum }[] = Object.values(TransactionTypeEnum)
            .filter((value:TransactionTypeEnum):boolean => value !== TransactionTypeEnum.BALANCE)
            .map((value:TransactionTypeEnum):{value:string,label:string} => ({ value, label: value }));

        interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
            value:TransactionTypeEnum;
        }

        const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
            ({ value, ...others }: ItemProps, ref) => (
                <div ref={ref} {...others}>
                    <TransactionTypeBadge type={value}/>
                </div>
            )
        );



        return (
            <>
                <Select
                    itemComponent={SelectItem}
                    data={data}
                    size={"xs"}
                    label={transactionLocales.TRANSACTION_TYPE}
                    placeholder={transactionsPlaceholder.TRANSACTION_TYPE}
                />
            </>
        )
    }



    const CategorySelect = () => {


        const data = useSelector((state:RootState) => state.categories).map((data_:string)=>{return {"value":data_,"label":data_}})

        interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
            value:TransactionTypeEnum;
        }



        return (
            <>
                <Select
                    data={data}
                    size={"xs"}
                    label={"Category"}
                    placeholder={transactionsPlaceholder.CATEGORY}
                    maxDropdownHeight={200}
                />
            </>
        )
    }

  return (
      <div className={styles.TransactionForm}>
          <Header
              title={"Edit transaction"}
          />
          <div
              className={styles.body}
          >
              <TextInput
                  {...noteValidation}
                  label={transactionLocales.NOTE}
                  size={"xs"}
                  placeholder={transactionsPlaceholder.NOTE}
              />
              {
                  errors[transactionLocales.NOTE]?.message &&
                  <FormError message={errors[transactionLocales.NOTE]?.message!.toString()!} />
              }
              <div
                  className={styles.col2}
              >
                  <TextInput
                      label={transactionLocales.AMOUNT}
                      size={"xs"}
                      placeholder={transactionsPlaceholder.AMOUNT}
                      icon={<span className={"f-13"}>₹</span>}
                  />
                  <TransactionTypeSelect/>
              </div>
              <TextInput
                  {...register("transactee",{
                      required:true,
                      maxLength:3
                  })}
                  label={transactionLocales.TRANSACTEE}
                  size={"xs"}
                  placeholder={transactionsPlaceholder.TRANSACTEE}
              />
              <DateTimePicker
                  label="Pick date and time"
                  placeholder="Pick date and time"
                  maw={400}
                  mx="auto"
                  size={"xs"}
                  valueFormat="DD MMM YYYY hh:mm A"
              />
              <div
                  className={styles.col2}
              >
                  <CategorySelect/>
                  <PaymentModeSelect
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
                  onClick={handleSubmit((d)=>console.log(d))}
              >
                  Update
              </Button>
          </div>
      </div>
  )
}



export default TransactionForm;
