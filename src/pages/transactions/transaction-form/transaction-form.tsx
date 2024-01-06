import React, { useEffect } from "react";
import styles from "./transaction-form.module.scss";
import { Button } from "@mantine/core";
import PaymentModeSelect from "./payment-mode-select";
import AmountInput from "./amount-input";
import { useForm } from "react-hook-form";
import { Transaction } from "model";
import TransactionTypeSelect from "./transaction-type-select";
import NoteInput from "./note-input";
import TransacteeSelect from "./transactee-select";
import DateTimeSelect from "./date-time-select";
import CategorySelect from "./category-select";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    useFormLabelsTranslations,
    useFormPlaceholdersTranslations,
} from "locales/translation-hooks";
import { useTransactionFormEssentials } from "forms/hooks";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { getTransaction } from "service/transaction.service";
import { useCreateTransaction } from "service/react-query-hooks/transaction-query";

const TransactionForm = () => {
    const { transactionId } = useParams();
    const transactionQuery = useQuery({
        queryKey: ["transactions", transactionId],
        queryFn: () => getTransaction(Number.parseInt(transactionId!)),
        enabled: !!transactionId && !!parseInt(transactionId),
    });

    return (
        <TransactionFormPresentation
            data={transactionId ? transactionQuery.data : undefined}
        />
    );
};



export default TransactionForm;

interface TransactionFormPresentationProps {
    data?:Transaction;
}
function TransactionFormPresentation({data}:TransactionFormPresentationProps) {

    const navigate = useNavigate();
    const {formPlaceholders} = useFormPlaceholdersTranslations();
    const {formLabels} = useFormLabelsTranslations();
    let {
        schema,
        defaultValues,
        emptyValues
    } = useTransactionFormEssentials();

    const {
        control,
        handleSubmit,
        reset,
        getValues
    } = useForm<Transaction>({
        mode:"onSubmit",
        defaultValues: data || defaultValues,
        resolver:zodResolver(schema),
    })


    function clearAll(){
        reset(emptyValues);
    }

    const { mutate,isPending } = useCreateTransaction({
        onSuccess:()=>reset()
    });

    const onSubmit = (data:Transaction) => {
        return console.log(mutate(data));
    };

    useEffect(()=>{
        reset(data)
    },[data])


    return (
        <div className={styles.TransactionForm}>
            <div
                className={styles.body}
            >
                <NoteInput
                    label={formLabels.NOTE}
                    placeholder={formPlaceholders.NOTE}
                    control={control}
                    name={"note"}
                />
                <div
                    className={styles.col2}
                >
                    <AmountInput
                        label={formLabels.AMOUNT}
                        placeholder={formPlaceholders.AMOUNT}
                        control={control}
                        name={"amount"}
                    />
                    <TransactionTypeSelect
                        placeholder={formPlaceholders.TRANSACTION_TYPE}
                        label={formLabels.TRANSACTION_TYPE}
                        control={control}
                        name={"type"}
                    />
                </div>
                <TransacteeSelect
                    label={formLabels.TRANSACTEE}
                    placeholder={formPlaceholders.TRANSACTEE}
                    control={control}
                    name={"transactee"}
                />
                <DateTimeSelect
                    label={formLabels.TIME_DATE}
                    placeholder={formPlaceholders.TIME_DATE}
                    control={control}
                    name={"date"}
                />
                <div
                    className={styles.col2}
                >
                    <CategorySelect
                        label={formLabels.CATEGORY}
                        placeholder={formPlaceholders.CATEGORY}
                        control={control}
                        name={"category"}
                    />
                    <PaymentModeSelect
                        control={control}
                        name={"paymentMode"}
                        label={formLabels.PAYMENT_MODE}
                        placeholder={formPlaceholders.PAYMENT_MODE}
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
                    loading={isPending}
                >
                    {getValues("id") ? "Update" : "Add"}
                </Button>
            </div>
        </div>
    )
}
