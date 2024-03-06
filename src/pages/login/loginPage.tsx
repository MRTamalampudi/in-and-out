import React from "react";
import styles from "./login.module.scss";
import { Button, Checkbox } from "@mantine/core";
import { useForm } from "react-hook-form";
import { Logo } from "../../components/icons";
import { UsernamePassword } from "model";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInputForm, TextInputForm } from "forms/inputs";
import {
    useFormLabelsTranslations,
    useFormPlaceholdersTranslations,
} from "locales/translation-hooks";
import useLoginFormEssentials from "../../forms/hooks/login-form.essentials";
import axios from "axios";
import { createLazyRoute, Link, useNavigate } from "@tanstack/react-router";

const LoginPage = () => {
    const { formLabels } = useFormLabelsTranslations();
    const { formPlaceholders } = useFormPlaceholdersTranslations();
    const { schema, defaultValues, emptyValues } = useLoginFormEssentials();

    const { control, handleSubmit, formState, setValue, reset, getValues } =
        useForm<UsernamePassword>({
            mode: "onSubmit",
            resolver: zodResolver(schema),
        });
    const navigate = useNavigate();

    const onSubmit = (data: UsernamePassword) => {
        axios
            .post("http://dev.expenses.io/api/login", data, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
            .then((response) =>
                navigate({
                    search: { page: 1, size: 20 },
                    to: "/transactions",
                }),
            )
            .catch((error) => console.log(error));
    };

    return (
        <div className={styles.Login}>
            <div className={styles.left}>
                <div className={styles.form}>
                    <div className={"flex items-center space-x-2"}>
                        <div
                            className={
                                "bg-gradient-to-l from-gray-200 w-[5rem] h-0.5"
                            }
                        />
                        <span className={"heading-2 text-teal-700"}>Login</span>
                        <div
                            className={
                                "w-[5rem] h-0.5 bg-gradient-to-r from-gray-200"
                            }
                        />
                    </div>
                    <div className={styles.formContainer}>
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
                        <div
                            className={"flex-row justify-between items-center "}
                        >
                            <Checkbox
                                label={"Remember me"}
                                labelPosition={"right"}
                            />
                            <span className={"subtitle text-gray-500"}>Forgot password</span>
                        </div>
                        <Button size={"xs"} onClick={handleSubmit(onSubmit)}>
                            Log in
                        </Button>
                        <div
                            className={
                                "subtitle text-gray-500 flex justify-center mt-4"
                            }
                        >
                            <span>
                                Dont have an account{" "}
                                <Link to={"/signup"} className={"link"}>
                                    Signup
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={"mr-20"}>
                    <Logo className={"primary"} width={160} height={160} />
                </div>
                <span>Expenses Management App</span>
            </div>
        </div>
    );
};

export const LoginPageLazyRoute = createLazyRoute("/login")({
    component: LoginPage,
});
