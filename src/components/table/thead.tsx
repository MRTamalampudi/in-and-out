import React, { memo } from "react";
import { flexRender, Table } from "@tanstack/react-table";

type TheadProps<T> = {
    table: Table<T>;
};

function Thead<T>({ table }: TheadProps<T>) {

    return (
        <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <th
                            key={header.id}
                            className={header.column.columnDef.meta?.className}
                        >
                            {flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                            )}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
    );
}

export default memo(Thead) as typeof Thead;
