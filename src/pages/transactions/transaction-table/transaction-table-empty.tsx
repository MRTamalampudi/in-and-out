import { TransactionSvg } from "components/svg/transaction.svg";
import React from "react";
import TransactionFormModal from "pages/transactions/transaction-form/modal";
import { transactionRoute } from "pages/transactions/routes";
import { useNavigate } from "@tanstack/react-router";

export function TransactionTableEmpty() {
    const navigate = useNavigate({from:transactionRoute.fullPath});
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
                Looks like you dont have any Transactions
            </span>
            <div className={"flex space-x-2 items-center font-semibold"}>
                <span className={"body-text text-gray-500"}
                >
                    It's easy to create new Transaction
                </span>
                <span
                    className={
                        "underline cursor-pointer underline-offset-1 text-emerald-700"
                    }
                    onClick={()=>navigate({search:(prev)=>({addNew:true,...prev})})}
                >
                    Click here
                </span>
            </div>
        </div>
    );
}
