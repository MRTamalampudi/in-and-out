import {useTranslation} from "react-i18next";
import {useMemo} from "react";

const useFormPlaceholdersTranslations = () => {
    const FORM_PLACEHOLDERS:string = "form.placeholders.";
    const {t} = useTranslation();

    const formPlaceholders = useMemo(()=> ({
        NOTE: t(FORM_PLACEHOLDERS + "note"),
        AMOUNT: t(FORM_PLACEHOLDERS + "amount"),
        PAYMENT_MODE: t(FORM_PLACEHOLDERS + "paymentMode"),
        CATEGORY: t(FORM_PLACEHOLDERS + "category"),
        TRANSACTEE: t(FORM_PLACEHOLDERS + "transactee"),
        TRANSACTION_TYPE: t(FORM_PLACEHOLDERS + "transactionType"),
        TIME_DATE: t(FORM_PLACEHOLDERS + "timeDate"),
        EMAIL: t(FORM_PLACEHOLDERS + "email"),
        PASSWORD: t(FORM_PLACEHOLDERS + "password"),
        FIRST_NAME: t(FORM_PLACEHOLDERS + "firstName"),
        LAST_NAME: t(FORM_PLACEHOLDERS + "lastName"),
        CONFIRM_PASSWORD:t(FORM_PLACEHOLDERS + "confirmPassword")
    }),[]);

    return {
        formPlaceholders
    }
}

export default useFormPlaceholdersTranslations;