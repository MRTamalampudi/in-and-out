import React from "react";
import { flexRender, Table } from "@tanstack/react-table";

type TbodyProps= {
    children:React.ReactNode;
};

type Options = {
    onRowClick?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
};

function Tbody({ children }: TbodyProps) {

    return (
        <tbody>
        {children}
        </tbody>
    );
}

export default Tbody;
