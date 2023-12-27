import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { TextInput, Tooltip } from "@mantine/core";
import { Action } from "components/table/actions-row";
import { useParams } from "react-router-dom";
import TransactionTypeBadge from "components/transaction-type";
import { Transaction } from "model";
import { useNavigate } from "react-router";
import { TableRowProps } from "components/table/table-row-props";
import { useTableEssentials } from "components/table/table-essentials";
import {
    useDeleteTransaction,
    useIndexTransactions,
} from "service/react-query-hooks/transaction-query";
import DeleteConfirmationModal from "components/delete-confirmation-modal";
import { ReceiptData } from "components/recipt-bill/receipt-bill";
import useTransactionsTranslations from "locales/translation-hooks/transactions.locales";
import { Table, TableWrapper } from "components/table";
import styles from "components/table/table.module.scss";
import { useDebouncedValue } from "@mantine/hooks";

const columnDefs = {
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

    const [searchQuery,setSearchQuery] = useState<string>("");

    const [deb] = useDebouncedValue(searchQuery,500);

    const { data } = useIndexTransactions(currentPage,deb);
    const {
        transactions: { TRANSACTIONS },
    } = useTransactionsTranslations();

    return (
        <>
            <TableWrapper data={data?.content}>
                <TableWrapper.MetaRow
                    totalElements={data?.totalElements}
                    title={TRANSACTIONS}
                >
                    <TextInput
                        placeholder={"search"}
                        size={"xs"}
                        value={searchQuery}
                        onChange={(event)=>setSearchQuery(prevState => event.target.value)}
                    />
                </TableWrapper.MetaRow>
                <Table>
                    <Heading/>
                    <Table.Body>
                        {data &&
                            data?.content.map((transaction) => {
                                return (
                                    <Transaction_
                                        key={transaction.id}
                                        data={transaction}
                                    />
                                );
                            })}
                    </Table.Body>
                </Table>
                <TableWrapper.Pagination
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    totalElements={data?.totalElements!}
                />
            </TableWrapper>
        </>
    );
};

const renderTableHeaders = () => {
    return Object.values(columnDefs).map((attribute, index) => (
        <td key={index} className={attribute.className}>
            {attribute.name == "Actions" ? "" : attribute.name}
        </td>
    ));
};

const Heading = memo(() => {
    const [deleteModalData, setDeleteModalData] = useState<ReceiptData[]>();
    const {
        transactions: { TRANSACTION, TRANSACTIONS },
    } = useTransactionsTranslations();

    console.log("Transaction Heading_");

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
        <Table.Head
            actions={actions}
            onSelectionListChange={handleSelectedList}
        >
            {renderTableHeaders()}
        </Table.Head>
    );
});

const Transaction_ = ({ data }: TableRowProps) => {
    const { transactionId } = useParams();
    const navigate = useNavigate();

    const updateQueryParams = useCallback(
        () => navigate(data.id?.toString()),
        [],
    );

    const selected = useMemo(
        () => transactionId == data.id?.toString(),
        [data, transactionId],
    );
    const mutation = useDeleteTransaction(data?.id);

    const {
        transactions: { TRANSACTION },
    } = useTransactionsTranslations();

    useEffect(() => console.log("Transaction Table Row"));

    return (
        <Table.Row
            rowData={data}
            selected={selected}
            onClick={updateQueryParams}
        >
            <td className={columnDefs.NOTE.className}>
                <Tooltip label={data.note} position={"bottom"}>
                    <span>{data.note}</span>
                </Tooltip>
            </td>
            <td className={columnDefs.TRANSACTEE.className}>
                {data.transactee.name}
            </td>
            <td className={columnDefs.DATE.className}>
                {new Date(data.date * 1000).toLocaleDateString()}
            </td>
            <td className={columnDefs.PAYMENT_MODE.className}>
                {data.paymentMode}
            </td>
            <td className={columnDefs.CATEGORY.className}>
                {data.category.name}
            </td>
            <td className={columnDefs.TYPE.className}>
                <TransactionTypeBadge type={data.type!} />
            </td>
            <td className={`${columnDefs.AMOUNT.className} currency`}>
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
        </Table.Row>
    );
};

export default TransactionsTable;
