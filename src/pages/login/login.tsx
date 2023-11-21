import React from 'react';
import styles from './login.module.scss';
import {Button, TextInput} from "@mantine/core";
import {useForm} from "react-hook-form";
import {Logo} from "../../components/icons";
import {UsernamePassword} from "model";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {PasswordInputForm, TextInputForm} from "forms/inputs";
import {
    useFormErrorsTranslations,
    useFormLabelsTranslations,
    useFormPlaceholdersTranslations
} from "locales/translation-hooks";
import useLoginFormEssentials from "../../forms/hooks/login-form.essentials";
import axios from "axios";
import * as process from "process";
import {useNavigate} from "react-router";

const Login = () => {

    const {formLabels} = useFormLabelsTranslations();
    const {formPlaceholders} = useFormPlaceholdersTranslations();
    const {
        schema,
        defaultValues,
        emptyValues,
    } = useLoginFormEssentials();

    const {control,
        handleSubmit,
        formState,
        setValue,
        reset,
        getValues
    }=useForm<UsernamePassword>({
        mode:"onSubmit",
        resolver:zodResolver(schema),
    })
    const navigate = useNavigate();

    const onSubmit = (data:UsernamePassword) => {
      axios
          .post("http://dev.expenses.io/api/login",data,{
              headers: {
                  "Content-Type": "application/json"
              },
              withCredentials: true,
          })
          .then(response => navigate("/transactions") )
          .catch(error => console.log(error));
    }



  return(
      <div className={styles.Login}>
          <div className={styles.left}>
              <div className={styles.form}>
                  <TextInputForm
                      label={formLabels.EMAIL}
                      placeholder={formPlaceholders.EMAIL}
                      name={"username"}
                      control={control}
                  />
                  <PasswordInputForm
                      label={formLabels.PASSWORD}
                      placeholder={formPlaceholders.PASSWORD}
                      name={"password"}
                      control={control}
                  />
                  <div className={styles.seperator}/>
                  <Button
                      size={"xs"}
                      onClick={handleSubmit(onSubmit)}
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
