import {useTranslation} from "react-i18next";

const TransactionsConstants = () => {
    const TRANSACTIONS_CONST:string = "transactions.";
    const {t} = useTranslation();

    const locales = {
        TRANSACTIONS:t(TRANSACTIONS_CONST + "transactions")
    }

    return {
        locales
    }
}

export default TransactionsConstants;