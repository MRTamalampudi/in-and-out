import React, { memo } from "react";
import { flexRender, Table } from "@tanstack/react-table";
import SortAsc from "components/icons/sort-asc";
import SortDesc from "components/icons/sort-desc";
import Sort from "components/icons/sort";

type TheadProps<T> = {
    table: Table<T>;
};

function Thead<T>({ table }: TheadProps<T>) {
    const canSort = (id: string) => table.getColumn(id)?.getCanSort();
    const isSorted = (id: string) => table.getColumn(id)?.getIsSorted();
    const sortIcons: Record<string, JSX.Element> = {
        asc: <SortAsc width={16} height={16} className={"primary"}/>,
        desc: <SortDesc width={16} height={16} className={"primary"}/>,
    };

    const sortIcon = (id: string) =>
        sortIcons[isSorted(id) as unknown as string] ||
        (canSort(id) ? <Sort width={16} height={16} className={"grayIcon"}/> : null);

    return (
        <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <th
                            key={header.id}
                            className={header.column.columnDef.meta?.className}
                            onClick={header.column.getToggleSortingHandler()}
                        >
                            {flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                            )}
                            {sortIcon(header.column.id,)}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
    );
}

export default Thead;
