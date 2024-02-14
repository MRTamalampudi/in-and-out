import { TableWrapper } from "components/table";
import { TextInput } from "@mantine/core";
import Table from "components/table/table";
import ActionsRow, { Action } from "components/table/actions-row";
import {
    flexRender,
    PaginationState,
    Table as Table_,
} from "@tanstack/react-table";
import React from "react";
import { Transaction } from "model";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { transactionRoute } from "pages/transactions/routes";

type TransactionTableUiProps = {
    table: Table_<Transaction>;
    totalElements: number;
    pagination: PaginationState;
    actions: Action[];
};

export default function TransactionTableUi({
    table,
    totalElements,
    pagination,
    actions,
}: TransactionTableUiProps) {
    const { transaction, ...searchParams } = useSearch({
        from: transactionRoute.fullPath,
    });
    const navigate = useNavigate({ from: transactionRoute.fullPath });

    function onRowClick(id: number) {
        navigate({ search: { ...searchParams, transaction: id } });
    }

    function handlePagination(pagination_: PaginationState) {
        table.setPagination(pagination_);
        navigate({
            search: (prev) => ({
                ...prev,
                page: pagination_.pageIndex,
                size: pagination_.pageSize,
            }),
        });
    }

    function handleSearch(value: React.ChangeEvent<HTMLInputElement>) {
        table.getColumn("note")?.setFilterValue(value?.target?.value);
        navigate({
            search: (prev) => ({ ...prev, q: value?.target.value || "" }),
        });
    }

    return (
        <TableWrapper>
            <TableWrapper.MetaRow
                totalElements={totalElements}
                title={"Transactions"}
            >
                <TextInput placeholder={"search"} onChange={handleSearch} />
            </TableWrapper.MetaRow>
            <Table>
                {table.getIsSomeRowsSelected() ||
                table.getIsAllRowsSelected() ? (
                    <ActionsRow table={table} actions={actions} />
                ) : (
                    <Table.Head table={table} />
                )}
                <Table.Body>
                    {table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}
                            onClick={() => onRowClick(row.original.id)}
                            data-selected={row.original.id == transaction}
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    key={cell.id}
                                    className={
                                        cell.column.columnDef.meta?.className
                                    }
                                >
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext(),
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </Table.Body>
            </Table>
            <TableWrapper.Pagination
                totalElements={totalElements!}
                pagination={pagination}
                onPaginationChange={handlePagination}
            />
        </TableWrapper>
    );
}
