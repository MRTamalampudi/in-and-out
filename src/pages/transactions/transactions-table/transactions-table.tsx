import React, { useCallback, useMemo, useState } from "react";
import { Table } from "components";
import { Tooltip } from "@mantine/core";
import Thead from "components/table/thead";
import { Action } from "components/table/actions-row";
import { useParams } from "react-router-dom";
import TransactionTypeBadge from "components/transaction-type";
import { Transaction } from "model";
import Tr from "components/table/tbody";
import { useNavigate } from "react-router";
import {
    TableHeadProps,
    TableRowProps,
} from "components/table/table-row-props";
import { useTableEssentials } from "components/table/table-essentials";
import {
    useDeleteTransaction,
    useIndexTransactions,
} from "service/react-query-hooks/transaction-query";
import DeleteConfirmationModal from "components/delete-confirmation-modal";
import { ReceiptData } from "components/recipt-bill/receipt-bill";
import useTransactionsTranslations from "locales/translation-hooks/transactions.locales";

const dataAttributes = {
    NOTE: {
        name: "Note",
        className: "flex-basis-5/20 truncate",
    },
    TRANSACTEE: {
        name: "Transactee",
        className: "flex-basis-3/20",
    },
    DATE: {
        name: "Date",
        className: "flex-basis-3/20",
    },
    PAYMENT_MODE: {
        name: "Payment mode",
        className: "flex-basis-3/20",
    },
    CATEGORY: {
        name: "Category",
        className: "flex-basis-2/20",
    },
    TYPE: {
        name: "Type",
        className: "flex-basis-2/20",
    },
    AMOUNT: {
        name: "Amount",
        className: "flex-basis-2/20 text-align-right",
    },
};

const TransactionsTable = () => {
    const {
        currentPageState: { currentPage, setCurrentPage },
    } = useTableEssentials<Transaction>();

    const { data } = useIndexTransactions(currentPage);
    const {
        transactions: { TRANSACTIONS,CATEGORY },
    } = useTransactionsTranslations();

    return (
        <Table
            title={TRANSACTIONS}
            totalElements={data?.totalElements!}
            currentPage={currentPage}
            data={data?.content}
            setCurrentPage={setCurrentPage}
        >
            <Heading_ />
            <tbody>
                {data &&
                    data?.content.map((transaction) => {
                        return (
                            <Transaction_
                                key={transaction.id}
                                data={transaction}
                            />
                        );
                    })}
            </tbody>
        </Table>
    );
};

const renderTableHeaders = () => {
    return Object.values(dataAttributes).map((attribute, index) => (
        <td key={index} className={attribute.className}>
            {attribute.name == "Actions" ? "" : attribute.name}
        </td>
    ));
};

function Heading_<T extends { id: number }>() {
    const [deleteModalData, setDeleteModalData] = useState<ReceiptData[]>();
    const {
        transactions: { TRANSACTION, TRANSACTIONS },
    } = useTransactionsTranslations();

    console.log("Transaction Heading_")

    function handleSelectedList(entities: Transaction[]): void {
        setDeleteModalData(
            entities.map((entity) => ({
                id: entity.id,
                note: entity.note,
                amount: entity.amount.toString(),
            })),
        );
    }

    const actions: Action[] = useMemo(
        () => [
            {
                label: "Delete Transaction",
                component: () => (
                    <DeleteConfirmationModal
                        context={
                            deleteModalData?.length! > 1
                                ? TRANSACTIONS
                                : TRANSACTION
                        }
                        data={deleteModalData}
                    />
                ),
            },
        ],
        [deleteModalData],
    );

    return (
        <Thead actions={actions} onSelectionListChange={handleSelectedList}>
            {renderTableHeaders()}
        </Thead>
    );
}

const Transaction_ = ({ data }: TableRowProps) => {
    const { transactionId } = useParams();
    const navigate = useNavigate();

    const updateQueryParams = useCallback(()=>navigate(data.id?.toString()),[])

    const selected = useMemo(()=>transactionId == data.id?.toString(),[data,transactionId]);
    const mutation = useDeleteTransaction(data?.id);

    const {
        transactions: { TRANSACTION },
    } = useTransactionsTranslations();

    console.log("Transaction Table Row")

    return (
        <Tr rowData={data} selected={selected} onClick={updateQueryParams}>
            <td className={dataAttributes.NOTE.className}>
                <Tooltip label={data.note} position={"bottom"}>
                    <span>{data.note}</span>
                </Tooltip>
            </td>
            <td className={dataAttributes.TRANSACTEE.className}>
                {data.transactee.name}
            </td>
            <td className={dataAttributes.DATE.className}>
                {new Date(data.date * 1000).toLocaleDateString()}
            </td>
            <td className={dataAttributes.PAYMENT_MODE.className}>
                {data.paymentMode}
            </td>
            <td className={dataAttributes.CATEGORY.className}>
                {data.category.name}
            </td>
            <td className={dataAttributes.TYPE.className}>
                <TransactionTypeBadge type={data.type!} />
            </td>
            <td className={`${dataAttributes.AMOUNT.className} currency`}>
                {`$${data.amount}`}
            </td>
            <td
                data-action={"true"}
                className={"flex-basis-1/20"}
                onClick={(event) => event.stopPropagation()}
            >
                <Tooltip label={"Delete"} position={"top-end"}>
                    <div>
                        <DeleteConfirmationModal
                            context={TRANSACTION}
                            data={[
                                {
                                    id: data?.id,
                                    note: data?.note,
                                    amount: data?.amount,
                                },
                            ]}
                            primary={() => mutation.mutate(data?.id)}
                        />
                    </div>
                </Tooltip>
            </td>
        </Tr>
    );
};

export default TransactionsTable;
