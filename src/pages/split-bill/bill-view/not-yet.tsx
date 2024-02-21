import { SplitBill } from "model";
import {
    createColumnHelper,
    getCoreRowModel,
    RowModel,
    useReactTable,
} from "@tanstack/react-table";
import SplitBillShare from "model/split-bill-share.model";
import { columns } from "pages/split-bill/bill-view/columns";
import { data } from "autoprefixer";
import { undefined } from "zod";
import { TableUi } from "pages/split-bill/bill-view/table-ui";
import { TableWrapper } from "components/table";

export function NotYetTable({ data }: { data: SplitBillShare[] }) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <TableWrapper>
            <TableWrapper.MetaRow title={"Not yet"} />
            <TableUi table={table} />
        </TableWrapper>
    );
}
