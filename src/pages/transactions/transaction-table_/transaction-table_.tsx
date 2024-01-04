import React, { useState } from "react";
import {
    ColumnFilter, ColumnFiltersState,
    createColumnHelper,
    getCoreRowModel,
    PaginationState,
    useReactTable
} from "@tanstack/react-table";
import { Transaction } from "model";
import TransactionTypeBadge from "components/transaction-type";
import {
    useDeleteTransaction,
    useIndexTransactions,
} from "service/react-query-hooks/transaction-query";
import { Table, TableWrapper } from "components/table";
import { Checkbox, TextInput } from "@mantine/core";
import DeleteConfirmationModal from "components/delete-confirmation-modal";
import ActionsRow, { Action } from "components/table/actions-row";
import { toast } from "sonner";

interface TransactionTableProps {}

const TransactionTable = ({}: TransactionTableProps) => {
    const columnHelper = createColumnHelper<Transaction>();
    const { mutate, isPending, isError, error } = useDeleteTransaction({
        onSuccess: () => {
            toast.success("Deleted successfully", {
                description: "successfully deleted this transaction",
            });
            table.resetRowSelection();
        },
    });

    const columns = [
        {
            id: "select",
            //@ts-ignore
            header: ({ table }) => (
                <Checkbox
                    size={"xs"}
                    checked={table.getIsAllRowsSelected()}
                    indeterminate={table.getIsSomeRowsSelected()}
                    onChange={table.getToggleAllRowsSelectedHandler()}
                />
            ),
            //@ts-ignore
            cell: ({ row }) => (
                <Checkbox
                    size={"xs"}
                    checked={row.getIsSelected()}
                    onChange={row.getToggleSelectedHandler()}
                    disabled={!row.getCanSelect()}
                />
            ),
        },
        columnHelper.accessor("note", {
            header: "Note",
            cell: (props) => props.getValue(),
            meta: {
                className: "flex-basis-5/20 truncate",
            },
            enableColumnFilter: true,
            filterFn: "includesString",
        }),
        columnHelper.accessor("transactee.name", {
            header: "Transactee",
            cell: (props) => props.getValue(),
            meta: {
                className: "flex-basis-3/20",
            },
        }),
        columnHelper.accessor("date", {
            header: "Date",
            cell: (props) =>
                //@ts-ignore
                new Date(props.getValue() * 1000).toLocaleDateString(),
            meta: {
                className: "flex-basis-3/20",
            },
        }),
        columnHelper.accessor("paymentMode", {
            header: "Mode",
            cell: (props) => props.getValue(),
            meta: {
                className: "flex-basis-3/20",
            },
        }),
        columnHelper.accessor("category.name", {
            header: "Category",
            cell: (props) => props.getValue(),
            meta: {
                className: "flex-basis-2/20",
            },
        }),
        columnHelper.accessor("type", {
            header: "Type",
            cell: (props) => <TransactionTypeBadge type={props.getValue()!} />,
            meta: {
                className: "flex-basis-2/20",
            },
        }),
        columnHelper.accessor("amount", {
            header: "Amount",
            cell: (props) => `$ ${props.getValue()}`,
            meta: {
                className: "flex-basis-2/20 text-align-right",
            },
        }),
        {
            id: "Delete actions",
            header: ` `,
            //@ts-ignore
            cell: ({ row }) => (
                <DeleteConfirmationModal
                    context={"Transactions"}
                    data={[row.original]}
                    transformer={(data) => ({
                        id: data.id,
                        note: data.note,
                        amount: data.amount,
                    })}
                    primary={() => mutate([row.original.id])}
                />
            ),
            meta: {
                className: "action w48p flex-row jc-center",
            },
        },
    ];

    console.log("asss");

    const [columnFilters,setColumnFilters] = useState<ColumnFiltersState>([])
    const [rowSelection, setRowSelection] = useState({});
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 1,
        pageSize: 20,
    });
    const { data } = useIndexTransactions({ pageIndex, pageSize }, columnFilters);

    const table = useReactTable({
        data: data?.content || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        state: {
            rowSelection,
            pagination: { pageIndex, pageSize },
            columnFilters: columnFilters
        },
        manualPagination: true,
        onPaginationChange: setPagination,
        onColumnFiltersChange:setColumnFilters,
        enableFilters: true,
        enableColumnFilters: true,
        manualFiltering: true,
    });

    console.log(columnFilters)

    const actions: Action[] = [
        {
            label: "Delete Transactions",
            component: () => (
                <DeleteConfirmationModal
                    context={"Transactions"}
                    transformer={(data) => ({
                        id: data.id,
                        note: data.note,
                        amount: data.amount,
                    })}
                    data={table
                        .getFilteredSelectedRowModel()
                        .rows.map((rowData) => rowData.original)}
                    primary={() => {
                        mutate(
                            table
                                .getFilteredSelectedRowModel()
                                .rows.map((rowData) => rowData.original.id),
                        );
                    }}
                    isPending={isPending}
                />
            ),
        },
    ];

    return (
        <TableWrapper data={data?.content}>
            <TableWrapper.MetaRow
                totalElements={data?.totalElements}
                title={"Transactions"}
            >
                <TextInput placeholder={"search"} onChange={value=>table.getColumn("note")?.setFilterValue(value?.target?.value || "")}/>
            </TableWrapper.MetaRow>
            <Table>
                {table.getIsSomeRowsSelected() ||
                table.getIsAllRowsSelected() ? (
                    <ActionsRow table={table} actions={actions} />
                ) : (
                    <Table.Head table={table} />
                )}
                <Table.Body table={table} />
            </Table>
            <TableWrapper.Pagination
                totalElements={data?.totalElements!}
                pageSize={pageSize}
                pageIndex={pageIndex}
                onPaginationChange={table.setPagination}
            />
        </TableWrapper>
    );
};

export default TransactionTable;
