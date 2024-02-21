import { createColumnHelper } from "@tanstack/react-table";
import SplitBillShare from "model/split-bill-share.model";

const columnHelper = createColumnHelper<SplitBillShare>();

export const columns = [
    columnHelper.accessor("user",{
        header:"User",
        cell: props => props.getValue().getFullName(),
    }),
    columnHelper.accessor("status",{
        header:"Status",
        cell:props => props.getValue()
    }),
    columnHelper.accessor("amount",{
        header:"Amount",
        cell:props => props.getValue()
    })
]