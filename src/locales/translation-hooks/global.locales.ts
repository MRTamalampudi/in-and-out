import {useTranslation} from "react-i18next";
import { useMemo } from "react";

const useGlobalTranslations = () => {
    const GLOBAL:string = "global.";
    const {t} = useTranslation();

    const global = useMemo(()=>({
        TRANSACTIONS: t(GLOBAL + "transactions"),
        SPLIT_BILL: t(GLOBAL + "splitBill"),
        BUDGET: t(GLOBAL + "budget"),
        SETTINGS: t(GLOBAL + "settings"),
        USER_PROFILE: t(GLOBAL + "userProfile"),
        CATEGORY: t(GLOBAL+ "category"),
        PAYMENT_MODE: t(GLOBAL+ "paymentMode"),
        TRANSACTEE: t(GLOBAL+ "transactee"),
        TIME_DATE: t(GLOBAL + "timeDate"),
        AMOUNT:t(GLOBAL + "amount"),
        TRANSACTION_TYPE: t(GLOBAL + "transactionType")
    }),[])

    return {
        global
    }
}

export default useGlobalTranslations;