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
import { GroupsTableEmpty } from "pages/split-bill/groups/groups-table/groups-table-empty";

type GroupsTableProps = {};
const GroupsTable = ({}: GroupsTableProps) => {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState({});
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 1,
        pageSize: 20,
    });
    const { group,bill,addMembers,newGroup,newBill,bname,...searchParams } = splitBillRoute.useSearch();
    const navigate = useNavigate();

    const { data,isLoading } = useIndexGroupMembers(searchParams);

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
            emptyComponent:GroupsTableEmpty,
            isLoading,
            selected:(row)=> row.group.id == group,
            onRowClick:(row)=> onRowClick(row.group.id)
        }
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

    const isEmpty = table.getRowModel().rows.length == 0;

    return (
        <TableWrapper compact={true}>
            <TableWrapper.MetaRow
                totalElements={data?.totalElements || 0}
                title={"Groups"}
            >
                <TextInput
                    value={searchParams.gname}
                    placeholder={"search"}
                    onChange={handleSearch}
                />
            </TableWrapper.MetaRow>
            <Table>
                <ActionsRow table={table} />
                <Table.Head table={table} />
                <Table.Body table={table}/>
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
