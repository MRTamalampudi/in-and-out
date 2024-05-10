import { RowData, Table } from "@tanstack/react-table";
import {router} from "index"
import React from "react";

declare module '@tanstack/table-core' {
    interface ColumnMeta<TData extends RowData, TValue> {
        className: string
    }

    interface TableMeta<TData extends RowData> {
        emptyComponent: ()=>React.ReactNode,
        isLoading: boolean,
        selected?: (row:TData)=>boolean,
        onRowClick?: (row:TData)=>void,
    }
}

declare module '@tanstack/react-router' {
    interface Register {
        // This infers the type of our router and registers it across your entire project
        router: typeof router
    }
}