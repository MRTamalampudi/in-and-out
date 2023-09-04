import {useTranslation} from "react-i18next";
import {useGlobalConstants} from "./index";
import globals from "./globals";

const useTransactionsConstants = () => {
    const TRANSACTIONS_CONST:string = "transactions.";
    const PLACEHOLDER:string = "transactions.placeholder.";
    const {t} = useTranslation();
    const {globalLocales,gloabalPlacholders} = useGlobalConstants();

    const transactionLocales = {
        TRANSACTIONS:t(TRANSACTIONS_CONST + "transactions"),
        NOTE: t(TRANSACTIONS_CONST + "note"),
        CATEGORY: globalLocales.CATEGORY,
        PAYMENT_MODE: globalLocales.PAYMENT_MODE,
        TRANSACTEE: globalLocales.TRANSACTEE,
        TIME_DATE: globalLocales.TIME_DATE,
        AMOUNT: globalLocales.AMOUNT,
        TRANSACTION_TYPE: globalLocales.TRANSACTION_TYPE,
    }

    const transactionsPlaceholder = {
        NOTE: t(PLACEHOLDER + "note"),
        AMOUNT: gloabalPlacholders.AMOUNT,
    }

    return {
        transactionLocales,
        transactionsPlaceholder
    }
}

export default useTransactionsConstants;
