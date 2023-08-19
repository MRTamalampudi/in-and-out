import {useTranslation} from "react-i18next";

export const SplitBillConstants = () => {
    const SPLITBILL:string = "splitBill."
    const {t} = useTranslation();

    const LOCALES = () => {
     return {
         GROUPS: t(SPLITBILL + "groups"),
         BILLS: t(SPLITBILL + "bills"),
         FILTER: t(SPLITBILL + "filter"),
         SORT: t(SPLITBILL + "sort"),
     }
    }

    return {
        LOCALES,
    }
}


