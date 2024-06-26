import { useNavigate } from "@tanstack/react-router";
import { transactionRoute } from "pages/transactions/routes";
import { TransactionSvg } from "components/svg/transaction.svg";
import React from "react";
import { GroupSvg } from "components/svg/group.svg";
import { splitBillRoute } from "pages/split-bill/routes";
import { useGlobalTranslations } from "locales/translation-hooks";
import useEmptyTranslations from "locales/translation-hooks/empty.locales";

export function GroupsTableEmpty() {
    const navigate = useNavigate({from:splitBillRoute.fullPath});
    const {global:{GROUPS}} = useGlobalTranslations();
    const {empty:{MESSAGE,DESCRIPTION,CLICK_HERE}} = useEmptyTranslations(GROUPS);
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
                    onClick={()=>navigate({search:(prev)=>({newGroup:true,...prev})})}
                >
                    {CLICK_HERE}
                </span>
            </div>
        </div>
    );
}