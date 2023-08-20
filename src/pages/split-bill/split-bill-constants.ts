import {useTranslation} from "react-i18next";

export const SplitBillConstants = () => {
    const SPLITBILL:string = "splitBill."
    const {t} = useTranslation();

    const locales = {
        GROUPS: t(SPLITBILL + "groups"),
        BILLS: t(SPLITBILL + "bills"),
        FILTER: t(SPLITBILL + "filter"),
        SORT: t(SPLITBILL + "sort"),
        NEW_BILL: t(SPLITBILL + "new",{context:t(SPLITBILL + "bill")}),
        NEW_GROUP: t(SPLITBILL + "new",{context:t(SPLITBILL + "group")})
    }

    return {
        locales,
    }
}


