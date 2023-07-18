import React, { FC } from 'react';
import styles from './transaction-form.module.scss';
import {TextInput,Button} from "@mantine/core";
import Header from "../../components/header/header";

interface TransactionFormProps {}

const TransactionForm = ({}:TransactionFormProps) => {
  return (
      <div className={styles.TransactionForm}>
          <Header title={"Edit transaction"}/>
          <div className={styles.body}>
              <TextInput
                  label={"Note"}
                  size={"xs"}
              />
              <div className={styles.col2}>
                  <TextInput
                      label={"Amount"}
                      size={"xs"}
                  />
                  <TextInput
                      label={"Transaction type"}
                      size={"xs"}
                  />
              </div>
              <TextInput
                  label={"Transactee"}
                  size={"xs"}
              />
              <TextInput
                  label={"Time & Date"}
                  size={"xs"}
              />
              <div className={styles.col2}>
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
          <div className={styles.footer}>
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

export default TransactionForm;
