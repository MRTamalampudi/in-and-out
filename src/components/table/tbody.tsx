import React from "react";
import { flexRender, Table } from "@tanstack/react-table";
import CustomLoader from "components/custom-loader";

type TbodyProps<T> = {
    children?: React.ReactNode;
    table?: Table<T>;
};

type Options = {
    onRowClick?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
};

function Tbody<T>({ children, table }: TbodyProps<T>) {
    const isEmpty = table?.getRowModel().rows.length === 0;
    const isLoading = table?.options.meta?.isLoading;
    const selected = table?.options.meta?.selected;
    const onRowClick = table?.options.meta?.onRowClick;

    return (
        <tbody>
            {isLoading ? (
                <CustomLoader isLoading={isLoading} size={"xl"} type={"dots"} />
            ) : isEmpty ? (
                table.options.meta?.emptyComponent()
            ) : null}
            {
                table?.getRowModel().rows.map((row) => (
                    <tr
                        key={row.id}
                        onClick={() => onRowClick ? onRowClick(row.original) : null}
                        data-selected={selected ? selected(row.original) : false}
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
                ))
            }
            {
                children ? children : null
            }
        </tbody>
    );
}

export default Tbody;
