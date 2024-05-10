import { useNavigate } from "@tanstack/react-router";
import { transactionRoute } from "pages/transactions/routes";
import { TransactionSvg } from "components/svg/transaction.svg";
import React from "react";
import { GroupSvg } from "components/svg/group.svg";
import { splitBillRoute } from "pages/split-bill/routes";
import { BillSvg } from "components/svg/bill.svg";
import useEmptyTranslations from "locales/translation-hooks/empty.locales";
import { useGlobalTranslations } from "locales/translation-hooks";
import { Table } from "@tanstack/react-table";

export function BillsTableEmpty() {
    const navigate = useNavigate({ from: splitBillRoute.fullPath });
    const {
        global: { BILLS },
    } = useGlobalTranslations();
    const {
        empty: { MESSAGE, DESCRIPTION, CLICK_HERE },
    } = useEmptyTranslations(BILLS);

    return (
        <div
            className={
                "flex flex-col justify-center items-center my-auto h-full"
            }
        >
            <div className={"drop-shadow-md"}>
                <BillSvg width={350} height={250} />
            </div>
            <span className={"heading-3 text-emerald-700 font-semibold"}>
                {MESSAGE}
            </span>
            <div className={"flex space-x-2 items-center font-semibold"}>
                <span className={"body-text text-gray-500"}>{DESCRIPTION}</span>
                <span
                    className={
                        "underline cursor-pointer underline-offset-1 text-emerald-700"
                    }
                    onClick={() =>
                        navigate({
                            search: (prev) => ({ newBill: true, ...prev }),
                        })
                    }
                >
                    {CLICK_HERE}
                </span>
            </div>
        </div>
    );
}
