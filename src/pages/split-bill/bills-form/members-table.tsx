import React, { useState } from "react";
import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import { useIndexGroupMembers } from "service/react-query-hooks/split_bill_group_member.query";
import Table from "components/table/table";
import { TableWrapper } from "components/table";
import { useGetSplitBillGroup } from "service/react-query-hooks/split-bill-group.query";

function MembersTable() {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
        { id: "group", value: "1" },
    ]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState({});
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 1,
        pageSize: 20,
    });

    const { data } = useGetSplitBillGroup(0)

    return (
        <TableWrapper compact={true} borders={false} rowBorders={false}>
            <Table>
                <Table.Body>
                    {
                        data?.memberList.map((member,index)=>{
                            return (
                                <tr>
                                    <td>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </Table.Body>
            </Table>
        </TableWrapper>
    );
}

export default MembersTable;