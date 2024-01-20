import {
    ColumnFiltersState,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    PaginationState,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import { Checkbox, TextInput } from "@mantine/core";
import React, { useState } from "react";
import SplitBillGroupMember from "model/split-bill-group-member.model";
import { useIndexGroupMembers } from "service/react-query-hooks/split_bill_group_member.query";
import { TableWrapper } from "components/table";
import Table from "components/table/table";
import ActionsRow from "components/table/actions-row";
import { useSearchParams } from "react-router-dom";

type GroupsTableProps = {};
const GroupsTable = ({}:GroupsTableProps) => {

    const columnHelper = createColumnHelper<SplitBillGroupMember>()

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
                    onClick={(event)=>event.stopPropagation()}
                />
            ),
            //@ts-ignore
            cell: ({ row }) => (
                <Checkbox
                    size={"xs"}
                    checked={row.getIsSelected()}
                    onChange={row.getToggleSelectedHandler()}
                    disabled={!row.getCanSelect()}
                    onClick={(event)=>event.stopPropagation()}
                />
            ),
        },
        columnHelper.accessor("group.name",{
            header: "Name",
            cell: props => props.getValue(),
            meta: {
                className : "flex-basis-10/20"
            }
        }),
        columnHelper.accessor("lentShare",{
            header: "Lent",
            cell: props => props.getValue(),
            meta: {
                className : "flex-basis-5/20 text-align-right jc-right"
            }
        }),
        columnHelper.accessor("oweShare",{
            header: "Owe",
            cell: props => props.getValue(),
            meta: {
                className : "flex-basis-5/20 text-align-right jc-right"
            }
        })
    ]



    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState({});
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 1,
        pageSize: 20,
    });

    const {data} = useIndexGroupMembers(pagination,columnFilters,sorting);

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

    const [searchParams, setSearchParams] = useSearchParams();
    function onRowClick(id: number) {
        searchParams.set("view", id.toString());
        setSearchParams(searchParams);
    }

    return (
        <TableWrapper>
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
                            onClick={() => onRowClick(row.original.id)}
                            data-selected={row.original.id.toString() == searchParams.get("view")}
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