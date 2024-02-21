import styles from "./bill-view.module.scss";
import { useNavigate } from "@tanstack/react-router";
import { splitBillRoute } from "pages/split-bill/routes";
import ModalWrapper from "components/modal";
import React from "react";
import { useGetSplitBill } from "service/react-query-hooks/split-bill.query";
import { NotYetTable } from "pages/split-bill/bill-view/not-yet";
import { data } from "autoprefixer";
import SplitBillStatus from "enum/split-bill-status.enum";

export function BillView() {
    const navigate = useNavigate({ from: splitBillRoute.fullPath });

    function handleOnClose() {
        navigate({ search: ({ bill, ...prev }) => ({ ...prev }) });
    }

    const { bill } = splitBillRoute.useSearch();

    return (
        <ModalWrapper
            opened={!!bill}
            onClose={handleOnClose}
            title={"Add Bill"}
            size={"50rem"}
        >
            {bill && <BillViewUI bill={bill}/>}
        </ModalWrapper>
    );
}

function BillViewUI({bill}:{bill:number}) {
    const {data:splitBill} = useGetSplitBill(bill!);

    return (
        <>
            <div className={styles.BillView}>
                <div className={styles.summary}>
                    <div className={styles.left}>
                        <span className={"body-text"}>{splitBill?.bill}</span>
                        <span className={"small-text grayText"}>{`paid by ${splitBill?.paidBy.getFullName()}`}</span>
                        <span className={"small-text grayText"}>{`paid on ${splitBill?.date.toLocaleDateString()}`}</span>
                    </div>
                    <div className={styles.right}>
                        <span className={"f-40"}>{`$ ${splitBill?.amount}`}</span>
                    </div>
                </div>
                <NotYetTable data={splitBill?.splitBillShareList?.filter(share=>share.status == SplitBillStatus.PENDING) || []}/>
            </div>
            <div className={"footer"}>
                testing
            </div>
        </>
    )
}
