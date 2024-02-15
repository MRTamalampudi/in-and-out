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
import React, { useMemo, useState } from "react";
import { TableWrapper } from "components/table";
import Table from "components/table/table";
import ActionsRow from "components/table/actions-row";
import SplitBillShare from "model/split-bill-share.model";
import { useIndexBillShare } from "service/react-query-hooks/split-bill-share.query";
import DeleteConfirmationModal from "components/delete-confirmation-modal";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { splitBillRoute } from "pages/split-bill/routes";
import { transformSplitBillSearchParams } from "service/react-query-hooks/split_bill_group_member.query";

type BillsTableProps = {

}
const BillsTable = ({}:BillsTableProps) => {
    const columnHelper = createColumnHelper<SplitBillShare>();

    const columns = useMemo(()=>([
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
        columnHelper.accessor("bill.bill",{
            header: "Bill",
            cell: props => props.getValue(),
            enableSorting:false,
            meta:{
                className:"flex-basis-5/20"
            }
        }),
        columnHelper.accessor("bill.paidBy",{
            header: "Paid By",
            cell: props => props.getValue().getFullName(),
            meta:{
                className:"flex-basis-4/20"
            },
            enableSorting:false
        }),
        columnHelper.accessor("status",{
            header: "My Status",
            cell: props => props.getValue(),
            meta:{
                className:"flex-basis-3/20"
            },
            enableSorting:false
        }),
        columnHelper.accessor("bill.date",{
            header: "Paid on",
            cell: props => props.getValue().toLocaleDateString(),
            meta:{
                className:"flex-basis-3/20"
            }
        }),
        columnHelper.accessor("amount",{
            header: "My Share",
            cell: props => props.getValue(),
            meta:{
                className:"flex-basis-2/20 text-align-right jc-right"
            }
        }),
        columnHelper.accessor("bill.amount",{
            header: "Amount",
            cell: props => props.getValue(),
            meta:{
                className:"flex-basis-2/20 text-align-right jc-right"
            }
        }),
        {
            id: "Delete actions",
            header: ` `,
            //@ts-ignore
            cell: ({ row }) => (
                <DeleteConfirmationModal
                    context={"Bills"}
                    data={[row.original]}
                    transformer={(data) => ({
                        id: data.id,
                        note: data.bill.bill,
                        amount: data.bill.amount,
                    })}
                    primary={() => null}
                />
            ),
            meta: {
                className: "action w48p flex-row jc-center",
            },
        }
    ]),[])

    const searchParams = splitBillRoute.useSearch();

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState({});
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 1,
        pageSize: 20,
    });

    const {data} = useIndexBillShare({ ...transformSplitBillSearchParams(searchParams),group:(searchParams.group || 0) });

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
    const navigate = useNavigate({from:splitBillRoute.fullPath});
    function onRowClick(id: number) {
        navigate({search:(prev)=>({...prev,bill:id})})
    }

    return (
        <TableWrapper borders={false}>
            <TableWrapper.MetaRow
                totalElements={data?.totalElements || 0}
                title={"Bills"}
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
                            data-selected={row.original.id == searchParams.bill}
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

export default BillsTable;