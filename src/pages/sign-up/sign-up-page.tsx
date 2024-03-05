import React from "react";
import styles from "./sign-up.module.scss";
import { createLazyRoute, useNavigate } from "@tanstack/react-router";
import { PasswordInputForm, TextInputForm } from "forms/inputs";
import { Button } from "@mantine/core";
import { Logo } from "components/icons";
import {
    useFormLabelsTranslations,
    useFormPlaceholdersTranslations,
} from "locales/translation-hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { z } from "zod";

interface SignUpProps {}

const SignUpPage = (props:SignUpProps) => {

    const { formLabels } = useFormLabelsTranslations();
    const { formPlaceholders } = useFormPlaceholdersTranslations();
    const schema = z.object({
        firstName:z.string().min(2),
        lastName:z.string().min(2),
        email:z.string().email(),
        password:z.string().min(8),
        confirm:z.string().min(8),
    }).refine((data) => data.password === data.confirm, {
        message: "Passwords don't match",
        path: ["confirm"]
    });
    
    type SignUp = z.infer<typeof schema>;

    const { control, handleSubmit, formState, setValue, reset, getValues } =
        useForm<SignUp>({
            mode: "onSubmit",
            resolver: zodResolver(schema),
        });
    const navigate = useNavigate();

    const onSubmit = (data: SignUp) => {
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
        <div className={styles.SignUp}>
            <div className={styles.left}>
                <div className={styles.form}>
                    <span className={"heading-2 text-teal-700"}>Signup</span>
                    <div className={styles.formContainer}>
                        <TextInputForm
                            label={formLabels.FIRST_NAME}
                            placeholder={formPlaceholders.FIRST_NAME}
                            name={"firstName"}
                            control={control}
                        />
                        <TextInputForm
                            label={formLabels.LAST_NAME}
                            placeholder={formPlaceholders.LAST_NAME}
                            name={"lastName"}
                            control={control}
                        />
                        <TextInputForm
                            label={formLabels.EMAIL}
                            placeholder={formPlaceholders.EMAIL}
                            name={"email"}
                            control={control}
                        />
                        <PasswordInputForm
                            label={formLabels.PASSWORD}
                            placeholder={formPlaceholders.PASSWORD}
                            name={"password"}
                            control={control}
                        />
                        <PasswordInputForm
                            label={formLabels.CONFIRM_PASSWORD}
                            placeholder={formPlaceholders.CONFIRM_PASSWORD}
                            name={"password"}
                            control={control}
                        />
                        <div className={styles.seperator} />
                        <Button size={"xs"} onClick={handleSubmit(onSubmit)}>
                            Log in
                        </Button>
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

export const SignUpPageLazyRoute = createLazyRoute("/signup")({
    component: SignUpPage
});
