import { useNavigate } from "@tanstack/react-router";
import { transactionRoute } from "pages/transactions/routes";
import { TransactionSvg } from "components/svg/transaction.svg";
import React from "react";
import { GroupSvg } from "components/svg/group.svg";
import { splitBillRoute } from "pages/split-bill/routes";

export function GroupsTableEmpty() {
    const navigate = useNavigate({from:splitBillRoute.fullPath});
    return (
        <div
            className={
                "flex flex-col justify-center items-center my-auto h-full"
            }
        >
            <div className={"drop-shadow-md"}>
                <GroupSvg width={200} height={280} />
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
                    onClick={()=>navigate({search:(prev)=>({newGroup:true,...prev})})}
                >
                    Click here
                </span>
            </div>
        </div>
    );
}