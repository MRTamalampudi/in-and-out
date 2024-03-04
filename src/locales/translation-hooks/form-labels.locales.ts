import {useTranslation} from "react-i18next";
import useGlobalTranslations from "./global.locales";
import { useMemo } from "react";

const useFormLabelsTranslations = () => {
    const FORM_LABELS:string = "form.labels.";
    const {t} = useTranslation();


    const formLabels = useMemo(()=>({
        CATEGORY: t(FORM_LABELS + "category"),
        PAYMENT_MODE: t(FORM_LABELS + "paymentMode"),
        TRANSACTEE: t(FORM_LABELS + "transactee"),
        TIME_DATE: t(FORM_LABELS + "timeDate"),
        AMOUNT: t(FORM_LABELS + "amount"),
        TRANSACTION_TYPE: t(FORM_LABELS + "transactionType"),
        LABELS: t(FORM_LABELS + "labels"),
        NOTE: t(FORM_LABELS + "note"),
        EMAIL: t(FORM_LABELS + "email"),
        PASSWORD: t(FORM_LABELS + "password"),
        FIRST_NAME: t(FORM_LABELS + "firstName"),
        LAST_NAME: t(FORM_LABELS + "lastName"),
    }),[])

    return {
        formLabels
    }
}

export default useFormLabelsTranslations;