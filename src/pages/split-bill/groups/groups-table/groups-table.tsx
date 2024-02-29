import {
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    PaginationState,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import { TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useIndexGroupMembers } from "service/react-query-hooks/split_bill_group_member.query";
import { TableWrapper } from "components/table";
import Table from "components/table/table";
import ActionsRow from "components/table/actions-row";
import { columns } from "./columns";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { splitBillRoute } from "pages/split-bill/routes";

type GroupsTableProps = {};
const GroupsTable = ({}: GroupsTableProps) => {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState({});
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 1,
        pageSize: 20,
    });
    const { group,bill,newGroup,newBill,bname,...searchParams } = splitBillRoute.useSearch();
    const navigate = useNavigate();

    const { data } = useIndexGroupMembers(searchParams);

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
    });
    function onRowClick(id: number) {
        navigate({ search: (prev) => ({ ...prev, group: id }) });
    }

    function handleSearch(value: React.ChangeEvent<HTMLInputElement>) {
        table.getColumn("note")?.setFilterValue(value?.target?.value);
        navigate({
            search: (prev) => ({ ...prev, gname: value?.target.value || "" }),
        });
    }

    function handlePaginationChange(value: PaginationState) {
        navigate({
            search: (prev) => ({
                ...prev,
                gpage: value.pageIndex,
                gsize: value.pageSize,
            }),
        });
        table.setPagination(value);
    }

    return (
        <TableWrapper compact={true}>
            <TableWrapper.MetaRow
                totalElements={data?.totalElements || 0}
                title={"Transactions"}
            >
                <TextInput
                    value={searchParams.gname}
                    placeholder={"search"}
                    onChange={handleSearch}
                />
            </TableWrapper.MetaRow>
            <Table>
                {table.getIsSomeRowsSelected() ||
                table.getIsAllRowsSelected() ? (
                    <ActionsRow table={table} />
                ) : (
                    <Table.Head table={table} />
                )}
                <Table.Body>
                    {table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}
                            onClick={() => onRowClick(row.original.group.id)}
                            data-selected={row.original.group.id == group}
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
                totalElements={data?.totalElements || 0}
                pagination={pagination}
                onPaginationChange={handlePaginationChange}
            />
        </TableWrapper>
    );
};

export default GroupsTable;
