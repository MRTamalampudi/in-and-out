import React from 'react';
import styles from './login.module.scss';
import {Button, TextInput} from "@mantine/core";
import {TextInputForm} from "../../components/form";
import {useForm} from "react-hook-form";
import PasswordInputForm from "../../components/form/password-input-form";
import {Logo} from "../../components/icons";

const Login = () => {

    const {control} = useForm()

  return(
      <div className={styles.Login}>
          <div className={styles.left}>
              <div className={styles.form}>
                  <TextInputForm
                      label={"Email"}
                      placeholder={"enter email"}
                      name={"name"}
                      control={control}
                  />
                  <PasswordInputForm
                      label={"Password"}
                      placeholder={"enter password"}
                      name={"password"}
                      control={control}
                  />
                  <div className={styles.seperator}/>
                  <Button
                      size={"xs"}
                  >
                      Log in
                  </Button>
              </div>
          </div>
          <div className={styles.right}>
              <div className={"mr-20"}>
                  <Logo
                      className={"primary"}
                      width={160}
                      height={160}
                  />
              </div>
              <span>Expenses Management App</span>
          </div>
      </div>
  )
}

export default Login;
