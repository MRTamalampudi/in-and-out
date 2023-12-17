import React, { useContext } from "react";
import { Table } from "components";
import { Tooltip } from "@mantine/core";
import Thead from "components/table/thead";
import ActionsRow from "components/table/actions-row";
import { useParams } from "react-router-dom";
import TransactionTypeBadge from "components/transaction-type";
import { Transaction } from "model";
import { Tr } from "components/table/tbody";
import { useNavigate } from "react-router";
import { TableRowProps } from "components/table/table-row-props";
import { useTransactionsTranslations } from "locales/translation-hooks";
import { useTableEssentials } from "components/table/table-essentials";
import {
    useDeleteTransaction,
    useIndexTransactions,
} from "service/react-query-hooks/transaction-query";
import DeleteConfirmationModal from "components/delete-confirmation-modal";
import { ReceiptData } from "components/recipt-bill/receipt-bill";
import { selectAllHandler } from "utils/selectionHandler";
import { TableContext } from "components/table/context";

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
        selectionListState: { selectionList, setSelectionList },
    } = useTableEssentials<Transaction>();

    const { data } = useIndexTransactions(currentPage);
    const {
        transactions: { TRANSACTIONS },
    } = useTransactionsTranslations();

    const Heading = () => {
        const renderTableHeaders = () => {
            return Object.values(dataAttributes).map((attribute, index) => (
                <td key={index} className={attribute.className}>
                    {attribute.name == "Actions" ? "" : attribute.name}
                </td>
            ));
        };

        return (
            <Thead data={data?.content!} setSelection={setSelectionList}>
                {renderTableHeaders()}
            </Thead>
        );
    };

    function renderActionsRow() {

        function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
            const selectedList = selectAllHandler(
                data?.content!,
                selectionList,
                event.currentTarget.checked,
            );
            setSelectionList(selectedList);
        }

        const {selectionList,setSelectionList}=useContext(TableContext)

        const receiptData: ReceiptData[] = selectionList.map((transaction) => {
            const { id, note, amount } = transaction;
            return { id, note, amount:`$ ${amount}` };
        })!;

        return (
            <ActionsRow
                checked={selectionList.length == data?.content.length}
                data={receiptData}
                indeterminate={data?.content.length != selectionList.length}
                onChange={handleOnChange}
            />
        );
    }

    return (
        <Table
            title={TRANSACTIONS}
            totalElements={data?.totalElements}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            data={data}
        >
            {selectionList.length ? renderActionsRow() : <Heading />}
            <tbody>
                {data &&
                    data?.content.map((transaction) => {
                        return (
                            <Transaction_
                                key={transaction.id}
                                data={transaction}
                                checked={
                                    !!selectionList.find(
                                        (transaction1) =>
                                            transaction.id == transaction1.id,
                                    )
                                }
                            />
                        );
                    })}
            </tbody>
        </Table>
    );
};

const Transaction_ =({
    data
}: TableRowProps) => {
    const { transactionId } = useParams();
    const navigate = useNavigate();

    function updateQueryParams() {
        navigate(data.id?.toString());
    }

    const selected = transactionId == data.id?.toString();
    const mutation = useDeleteTransaction(data?.id);
    const {
        transactions: { TRANSACTION },
    } = useTransactionsTranslations();

    return (
        <Tr
            rowData={data}
            selected={selected}
            onClick={updateQueryParams}
        >

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
                onClick={(event)=> event.stopPropagation()}
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
