import React from "react";
import { flexRender, Table } from "@tanstack/react-table";

type TbodyProps<T> = {
    table: Table<T>;
};

function Tbody<T>({ table }: TbodyProps<T>){
    return (
        <tbody>
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
        </tbody>
    );
}

export default Tbody;
