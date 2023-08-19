import {useTranslation} from "react-i18next";

const GlobalConstants = () => {
  const GLOBAL:string = "global."
  const {t} = useTranslation();



  const LOCALES = ()=> {
      return {
          TRANSACTIONS: t(GLOBAL + "transactions"),
          SPLIT_BILL: t(GLOBAL + "splitBill"),
          BUDGET: t(GLOBAL + "budget"),
          SETTINGS: t(GLOBAL + "settings"),
          USER_PROFILE: t(GLOBAL + "userProfile"),
      }
    }

    return {
      LOCALES
    }
}

export default GlobalConstants;