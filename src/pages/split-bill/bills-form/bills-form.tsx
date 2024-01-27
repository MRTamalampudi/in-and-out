import styles from "./bills-form.module.scss";
import { TextInputForm } from "forms/inputs";
import { useForm } from "react-hook-form";
import ModalWrapper from "components/modal";
import { useSearchParams } from "react-router-dom";
import { Dropzone } from "@mantine/dropzone";
import Paperclip from "components/icons/paperclip";
import React, { useState } from "react";
import {
    ColumnFiltersState,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    PaginationState,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import { useIndexGroupMembers } from "service/react-query-hooks/split_bill_group_member.query";
import { TableWrapper } from "components/table";
import { Button, Checkbox, TextInput } from "@mantine/core";
import Table from "components/table/table";
import SplitBillGroupMember from "model/split-bill-group-member.model";

type BillsFormProps = {};
const BillsForm = ({}: BillsFormProps) => {
    const [searchParams, setSearchParams] = useSearchParams();

    function handleOnClose() {
        searchParams.delete("newBill");
        setSearchParams(searchParams);
    }

    return (
        <ModalWrapper
            opened={!!searchParams.get("newBill")}
            onClose={handleOnClose}
            title={"Add Bill"}
            size={"50rem"}
        >
            <BillsFormPresentation />
        </ModalWrapper>
    );
};

const BillsFormPresentation = () => {
    const { control, handleSubmit, reset, getValues } = useForm({
        mode: "onSubmit",
    });

    const columnHelper = createColumnHelper<SplitBillGroupMember>();

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
                    onClick={(event) => event.stopPropagation()}
                />
            ),
            //@ts-ignore
            cell: ({ row }) => (
                <Checkbox
                    size={"xs"}
                    checked={row.getIsSelected()}
                    onChange={row.getToggleSelectedHandler()}
                    disabled={!row.getCanSelect()}
                    onClick={(event) => event.stopPropagation()}
                />
            ),
        },
        columnHelper.accessor("member", {
            header: "Name",
            cell: (props) => (
                <div className={"flex-row column-gap-8 align-center"}>
                    <span>{props.getValue().getFullName()}</span>
                </div>
            ),
            meta: {
                className: "flex-basis-10/20",
            },
        }),
        {
            id:"share",
            header:"not",
            cell: ()=> <TextInput/>
        }
    ];

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
        { id: "group", value: "1" },
    ]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState({});
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 1,
        pageSize: 20,
    });

    const { data } = useIndexGroupMembers(pagination, columnFilters, sorting);

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

    console.log(
        table.getSelectedRowModel().rows.map((row) => row.getVisibleCells().map(value => value.getValue())),
    );

    return (
        <div className={styles.BillsForm}>
            <div className={styles.body}>
                <div className={styles.left}>
                    <TextInputForm
                        name={"amount"}
                        control={control}
                        label={"Amount"}
                        placeholder={"enter amount"}
                    />
                    <TextInputForm
                        name={"bill"}
                        control={control}
                        label={"Bill"}
                        placeholder={"enter bill"}
                    />
                    <TextInputForm
                        name={"by"}
                        control={control}
                        label={"Paid by"}
                        placeholder={"select paid by"}
                    />
                    <TextInputForm
                        name={"on"}
                        control={control}
                        label={"Paid on"}
                        placeholder={"select paid date"}
                    />
                    <div className={styles.dropzone}>
                        <Dropzone onDrop={() => console.log("drop")}>
                            <Paperclip width={64} height={64} />
                            <span>Drop the bills</span>
                        </Dropzone>
                    </div>
                </div>
                <div className={styles.right}>
                    <span className={"subtitle"}>Members</span>
                    <TableWrapper compact={true}>
                        <Table>
                            <Table.Body>
                                {table.getRowModel().rows.map((row) => (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map((cell) => (
                                            <td
                                                key={cell.id}
                                                className={
                                                    cell.column.columnDef.meta
                                                        ?.className
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
                    </TableWrapper>
                </div>
            </div>
            <div className={"footer"}>
                <Button size={"compact-sm"} variant={"outline"}>
                    Clear all
                </Button>
                <Button size={"compact-sm"} type={"submit"}>
                    {getValues("id") ? "Update" : "Add"}
                </Button>
            </div>
        </div>
    );
};

export default BillsForm;
