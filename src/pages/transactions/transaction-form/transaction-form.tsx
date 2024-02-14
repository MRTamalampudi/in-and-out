import React from "react";
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
import {
    useCreateTransaction,
    useGetTransaction, useUpdateTransaction
} from "service/react-query-hooks/transaction-query";
import { useCloseModal } from "utils/useCloseModal";
import { toast } from "sonner";
import { useSearch } from "@tanstack/react-router";
import { transactionRoute } from "pages/transactions/routes";

const TransactionForm = () => {
    const { transaction } = transactionRoute.useSearch();

    const data = useGetTransaction(transaction || 0);
    console.log(data);
    return (
        <TransactionFormPresentation
            transactionData={data.isError ? undefined : data.data}
        />
    );
};

export default TransactionForm;

interface TransactionFormPresentationProps {
    transactionData?: Transaction;
}
function TransactionFormPresentation({
    transactionData,
}: TransactionFormPresentationProps) {

    const { formPlaceholders } = useFormPlaceholdersTranslations();
    const { formLabels } = useFormLabelsTranslations();
    let { schema, defaultValues, emptyValues } = useTransactionFormEssentials();

    const { control, handleSubmit, reset, getValues } = useForm<Transaction>({
        mode: "onSubmit",
        defaultValues: transactionData || defaultValues,
        resolver: zodResolver(schema),
    });

    function clearAll() {
        closeModal();
        reset(emptyValues);
    }

    const { mutate, isPending } = useCreateTransaction({
        onSuccess: () => {
            closeModal()
        },
    });
    const { mutate:updateMutate, isPending:isUpdatePending } = useUpdateTransaction({
        onSuccess: () => {
            closeModal()
        },
    });

    const onSubmit = (data: Transaction) => {
        data.id ? updateMutate(data) : mutate(data);
        console.log("submitted data ==>",data);
    };

    const closeModal = useCloseModal();

    return (
        <div className={styles.TransactionForm}>
            <div className={styles.body}>
                <NoteInput
                    label={formLabels.NOTE}
                    placeholder={formPlaceholders.NOTE}
                    control={control}
                    name={"note"}
                />
                <div className={styles.col2}>
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
                <div className={styles.col2}>
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
            <div className={styles.footer}>
                <Button size={"xs"} variant={"outline"} onClick={clearAll}>
                    Clear all
                </Button>
                <Button
                    size={"xs"}
                    type={"submit"}
                    onClick={handleSubmit(onSubmit)}
                    loading={isPending || isUpdatePending}
                >
                    {getValues("id") ? "Update" : "Add"}
                </Button>
            </div>
        </div>
    );
}
