import {useTranslation} from "react-i18next";

const useGlobalConstants = () => {
  const GLOBAL:string = "global.";
  const PLACEHOLDER:string = GLOBAL + "placeholder.";
  const {t} = useTranslation();

  const CONSTANTS = () =>{
      return {
          TRANSACTIONS : "transactions"
      }
  }

  const globalLocales = {
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
    }

    const globalPlacholders = {
      AMOUNT: t(PLACEHOLDER + "amount"),
        PAYMENT_MODE: t(PLACEHOLDER + "paymentMode"),
        CATEGORY: t(PLACEHOLDER + "category")
    }

    return {
      globalLocales,
        globalPlacholders,

  }
}

export default useGlobalConstants;