import {
    ColumnFiltersState,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    PaginationState,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import { Avatar, Checkbox, TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import SplitBillGroupMember from "model/split-bill-group-member.model";
import { useIndexGroupMembers } from "service/react-query-hooks/split_bill_group_member.query";
import { TableWrapper } from "components/table";
import Table from "components/table/table";
import ActionsRow from "components/table/actions-row";
import { useSearchParams } from "react-router-dom";
import TextAvatar from "components/text-avatar";
import { columns } from "./columns";
import { useNavigate } from "react-router";
import { SPLITBILL_ROUTES } from "pages/split-bill/routes";
import { useSearchParamsConstants } from "constants/use-search-params.constants";

type GroupsTableProps = {};
const GroupsTable = ({}:GroupsTableProps) => {

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([{id:"forGroupsList",value:"true"}]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState({});
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 1,
        pageSize: 20,
    });
    const [searchParams, setSearchParams] = useSearchParams();
    const {GROUP} = useSearchParamsConstants();

    const {data} = useIndexGroupMembers(pagination,columnFilters,sorting);

    useEffect(() => {
        const groupId = data?.content?.at(0)?.group.id
        searchParams.set(GROUP,String(groupId!))
        setSearchParams(searchParams)
    }, [data?.content]);

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
        searchParams.set(GROUP, id.toString());
        setSearchParams(searchParams);
    }

    return (
        <TableWrapper compact={true}>
            <TableWrapper.MetaRow
                totalElements={data?.totalElements || 0}
                title={"Transactions"}
            >
                <TextInput
                    placeholder={"search"}
                    onChange={(value) =>
                        table
                            .getColumn("note")
                            ?.setFilterValue(value?.target?.value)
                    }
                />
            </TableWrapper.MetaRow>
            <Table>
                {table.getIsSomeRowsSelected() ||
                table.getIsAllRowsSelected() ? (
                    <ActionsRow table={table}/>
                ) : (
                    <Table.Head table={table} />
                )}
                <Table.Body>
                    {table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}
                            onClick={() => onRowClick(row.original.group.id)}
                            data-selected={row.original.group.id.toString() == searchParams.get(GROUP)}
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
                onPaginationChange={table.setPagination}
            />
        </TableWrapper>
    )
}

export default GroupsTable;