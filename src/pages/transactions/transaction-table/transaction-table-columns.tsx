import { createColumnHelper } from "@tanstack/react-table";
import { Transaction } from "model";
import React, { useMemo } from "react";
import { Checkbox, Tooltip } from "@mantine/core";
import TransactionTypeBadge from "components/transaction-type";

const columnHelper = createColumnHelper<Transaction>();

export const columns = [
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
    columnHelper.accessor("note", {
        header: "Note",
        cell: (props) => props.getValue(),
        meta: {
            className: "flex-basis-5/20 truncate",
        },
        enableColumnFilter: true,
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
        cell: (props) => (props.getValue() as unknown as Date).toLocaleDateString(),
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
        cell: (props) => <Tooltip position={"top"} label={props.getValue()}><span>{props.getValue()}</span></Tooltip> ,
        meta: {
            className: "flex-basis-2/20 truncate",
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
            className: "flex-basis-2/20 sort text-align-right pointer jc-right",
        },
    }),
];
