import { createColumnHelper } from "@tanstack/react-table";
import SplitBillGroupMember from "model/split-bill-group-member.model";
import { Checkbox } from "@mantine/core";
import TextAvatar from "components/text-avatar";
import React from "react";

const columnHelper = createColumnHelper<SplitBillGroupMember>()

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
    columnHelper.accessor("group.name",{
        header: "Name",
        cell: props => (<div className={"flex-row column-gap-8 align-center"}>
            <TextAvatar text={props.getValue()}/>
            <span>{props.getValue()}</span>
        </div>),
        enableSorting:false,
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