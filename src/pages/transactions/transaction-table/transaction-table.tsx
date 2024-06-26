import React, { useMemo, useState } from "react";
import {
    ColumnFiltersState,
    getCoreRowModel,
    PaginationState,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import {
    transactionQueryOptions,
    useDeleteTransaction,
} from "service/react-query-hooks/transaction-query";
import DeleteConfirmationModal from "components/delete-confirmation-modal";
import { Action } from "components/table/actions-row";
import { toast } from "sonner";
import TransactionTableUi from "pages/transactions/transaction-table/transaction-table-ui";
import { columns as columns_ } from "pages/transactions/transaction-table/transaction-table-columns";
import Checked from "components/icons/checked";
import { useSearch } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { TransactionTableEmpty } from "pages/transactions/transaction-table/transaction-table-empty";

interface TransactionTableProps {}

const TransactionTable = ({}: TransactionTableProps) => {
    const mutation = useDeleteTransaction({
        onError: () => {
            toast.error("Error while deleting");
        },
        onSuccess: () => {
            toast.success("Deleted successfully", {
                description: "successfully deleted this transaction",
                icon: <Checked height={20} width={20} className={"primary"} />,
            });
            table.resetRowSelection();
        },
    });

    const { transaction,...params } = useSearch({ from: "/transactions" });


    const columns = useMemo(
        () => [
            ...columns_,
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
                        primary={() => mutation.mutate([row.original.id])}
                    />
                ),
                meta: {
                    className: "action w48p flex-row jc-center",
                },
            },
        ],
        [],
    );

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
        { id: "note", value: params.q },
    ]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState({});
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: params.page,
        pageSize: params.size,
    });
    const { data,isLoading,isError } = useQuery(
        transactionQueryOptions({ ...params }),
    );
    const table = useReactTable({
        data: data?.content || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        state: {
            rowSelection,
            pagination,
            columnFilters,
            sorting,
        },
        manualPagination: true,
        onPaginationChange: setPagination,
        onColumnFiltersChange: setColumnFilters,
        onSortingChange: setSorting,
        enableFilters: true,
        enableColumnFilters: true,
        manualFiltering: true,
        manualSorting: true,
        enableSorting: true,
        enableMultiSort: true,
        meta:{
            emptyComponent:TransactionTableEmpty,
            isLoading,
        }
    });

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
                        mutation.mutate(
                            table
                                .getFilteredSelectedRowModel()
                                .rows.map((rowData) => rowData.original.id),
                        );
                    }}
                    isPending={mutation.isPending}
                />
            ),
        },
    ];

    return (
        <TransactionTableUi
            table={table}
            totalElements={data?.totalElements || 0}
            pagination={pagination}
            actions={actions}
        />
    );
};

export default TransactionTable;
