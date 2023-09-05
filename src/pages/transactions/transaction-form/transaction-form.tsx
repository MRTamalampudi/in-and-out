import React, {forwardRef} from 'react';
import styles from './transaction-form.module.scss';
import {Button, Select, TextInput} from "@mantine/core";
import {useTransactionsConstants} from "constants/index";
import {TransactionTypeEnum} from "enums";
import { DateTimePicker} from "@mantine/dates";
import {Header, TransactionTypeBadge} from "components";

interface TransactionFormProps {}

const TransactionForm = ({}:TransactionFormProps) => {

    const {
        transactionLocales,
        transactionsPlaceholder
    } = useTransactionsConstants();

  return (
      <div className={styles.TransactionForm}>
          <Header
              title={"Edit transaction"}
          />
          <div
              className={styles.body}
          >
              <TextInput
                  label={transactionLocales.NOTE}
                  size={"xs"}
                  placeholder={transactionsPlaceholder.NOTE}
              />
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
                  label={transactionLocales.TRANSACTEE}
                  size={"xs"}
                  placeholder={transactionLocales.TRANSACTEE}
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
                  <TextInput
                      label={"Category"}
                      size={"xs"}
                  />
                  <TextInput
                      label={"Payment Mode"}
                      size={"xs"}
                  />
              </div>
              <TextInput
                  label={"Labels"}
                  size={"xs"}
              />
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
              >
                  Update
              </Button>
          </div>
      </div>
  )
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
                label={"TransactionType"}
            />
        </>
    )
}

export default TransactionForm;
