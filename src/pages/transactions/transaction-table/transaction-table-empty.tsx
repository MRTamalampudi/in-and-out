import { TransactionSvg } from "components/svg/transaction.svg";
import React from "react";
import TransactionFormModal from "pages/transactions/transaction-form/modal";
import { transactionRoute } from "pages/transactions/routes";
import { useNavigate } from "@tanstack/react-router";
import { useGlobalTranslations } from "locales/translation-hooks";
import useEmptyTranslations from "locales/translation-hooks/empty.locales";

export function TransactionTableEmpty() {
    const navigate = useNavigate({from:transactionRoute.fullPath});
    const {global:{TRANSACTIONS}} = useGlobalTranslations();
    const {empty:{MESSAGE,DESCRIPTION,CLICK_HERE}} = useEmptyTranslations(TRANSACTIONS);
    return (
        <div
            className={
                "flex flex-col justify-center items-center my-auto h-full"
            }
        >
            <div className={"drop-shadow-md"}>
                <TransactionSvg width={230} height={280} />
            </div>
            <span className={"heading-3 text-emerald-700 font-semibold"}>
                {MESSAGE}
            </span>
            <div className={"flex space-x-2 items-center font-semibold"}>
                <span className={"body-text text-gray-500"}
                >
                    {DESCRIPTION}
                </span>
                <span
                    className={
                        "underline cursor-pointer underline-offset-1 text-emerald-700"
                    }
                    onClick={()=>navigate({search:(prev)=>({addNew:true,...prev})})}
                >
                    {CLICK_HERE}
                </span>
            </div>
        </div>
    );
}
