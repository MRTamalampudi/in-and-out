import { flexRender, Table as Table_ } from "@tanstack/react-table";
import ActionsRow from "components/table/actions-row";
import React from "react";
import Table from "components/table/table";

export function TableUi<Entity>({table}:{table:Table_<Entity>}) {
    return (
        <Table>
            <Table.Head table={table} />
            <Table.Body>
                {table.getRowModel().rows.map((row) => (
                    <tr
                        key={row.id}
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
    )
}