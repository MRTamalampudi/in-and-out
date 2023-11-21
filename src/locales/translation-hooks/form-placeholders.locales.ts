import {useTranslation} from "react-i18next";
import {useMemo} from "react";

const useFormPlaceholdersTranslations = () => {
    const FORM_PLACEHOLDERS:string = "form.placeholders.";
    const {t} = useTranslation();

    const formPlaceholders = useMemo(()=> {
        return {
            NOTE: t(FORM_PLACEHOLDERS + "note"),
            AMOUNT: t(FORM_PLACEHOLDERS + "amount"),
            PAYMENT_MODE: t(FORM_PLACEHOLDERS + "paymentMode"),
            CATEGORY: t(FORM_PLACEHOLDERS + "category"),
            TRANSACTEE: t(FORM_PLACEHOLDERS + "transactee"),
            TRANSACTION_TYPE: t(FORM_PLACEHOLDERS + "transactionType"),
            TIME_DATE: t(FORM_PLACEHOLDERS + "timeDate"),
            EMAIL: t(FORM_PLACEHOLDERS + "email"),
            PASSWORD: t(FORM_PLACEHOLDERS + "password"),
        }
    },[]);

    return {
        formPlaceholders
    }
}

export default useFormPlaceholdersTranslations;