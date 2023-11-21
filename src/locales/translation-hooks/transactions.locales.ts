import {useTranslation} from "react-i18next";
import useGlobalTranslations from "./global.locales";

const useTransactionsTranslations = () => {
    const TRANSACTIONS:string = "transactions.";
    const {t} = useTranslation();
    const {global} = useGlobalTranslations();

    const transactions = {
        TRANSACTIONS:t(TRANSACTIONS + "transactions"),
        NOTE: t(TRANSACTIONS + "note"),
        CATEGORY: global.CATEGORY,
        PAYMENT_MODE: global.PAYMENT_MODE,
        TRANSACTEE: global.TRANSACTEE,
        TIME_DATE: global.TIME_DATE,
        AMOUNT: global.AMOUNT,
        TRANSACTION_TYPE: global.TRANSACTION_TYPE,
    }

    return {
        transactions
    }
}

export default useTransactionsTranslations;