import styles from "./receipt-bill.module.scss";
import { Table, TableWrapper } from "components/table";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React from "react";

export type ReceiptBillProps = {
    data?: any[];
    transformer: (data: any) => ReceiptData;
};

export type ReceiptData = {
    id: number;
    note: string;
    amount: string;
};
const ReceiptBill = ({ data, transformer }: ReceiptBillProps) => {

    const columnHelper = createColumnHelper<ReceiptData>()

    const columns = [
        columnHelper.accessor("id",{
            header:"Id",
            cell:(props)=>props.getValue(),
            meta:{
                className: "flex-basis-3/20 text-align-right jc-right"
            }
        }),
        columnHelper.accessor("note",{
            header:"Note",
            cell:(props)=>props.getValue(),
            meta:{
                className: "flex-basis-13/20"
            }
        }),
        columnHelper.accessor("amount",{
            header:"Amount",
            cell:(props)=>`$${props.getValue()}`,
            meta:{
                className: "flex-basis-4/20 text-align-right jc-right"
            }
        })
    ]

    const table = useReactTable({
        data:data?.map((rowData) => transformer(rowData)) || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        enableSorting:false,
    })

    return (
        <div className={styles.reciptBill}>
            <TableWrapper
                borders={false}
                height={data?.length! > 5 ? 300 : undefined}
            >
                <Table>
                    <Table.Head table={table}/>
                    <Table.Body>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className={cell.column.columnDef.meta?.className}
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
    );
};

export default ReceiptBill;
