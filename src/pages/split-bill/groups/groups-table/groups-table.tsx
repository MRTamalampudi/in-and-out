import styles from "pages/split-bill/groups/groups-table/groups-table.module.scss"
import { createColumnHelper, PaginationState } from "@tanstack/react-table";
import { SplitBillGroup } from "model";
import { Checkbox } from "@mantine/core";
import React, { useState } from "react";
import { useIndexTransactions } from "service/react-query-hooks/transaction-query";

type GroupsTableProps = {

}
const GroupsTable = ({}:GroupsTableProps) => {

    const columnHelper = createColumnHelper<SplitBillGroup>()

    const columns = [
        {
            id: "select",
            //@ts-ignore
            header: ({ table }) => (
                <Checkbox
                    size={"xs"}
                    checked={table.getIsAllRowsSelected()}
                    indeterminate={table.getIsSomeRowsSelected()}
                    onChange={table.getToggleAllRowsSelectedHandler()}
                    onClick={(event)=>event.stopPropagation()}
                />
            ),
            //@ts-ignore
            cell: ({ row }) => (
                <Checkbox
                    size={"xs"}
                    checked={row.getIsSelected()}
                    onChange={row.getToggleSelectedHandler()}
                    disabled={!row.getCanSelect()}
                    onClick={(event)=>event.stopPropagation()}
                />
            ),
        },
        columnHelper.accessor("name",{
            header: "Name",
            cell: props => props.getValue(),
        }),
        columnHelper.accessor("lentShare",{
            header: "Lent",
            cell: props => props.getValue()
        }),
        columnHelper.accessor("oweShare",{
            header: "Owe",
            cell: props => props.getValue()
        })
    ]

    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 1,
        pageSize: 20,
    });
    const { data } = useIndexTransactions(pagination, [], []);

    console.log(Object.getPrototypeOf(new SplitBillGroup()).constructor.name)
    console.log(Object.getPrototypeOf(new SplitBillGroup()))

  return (
      <div className={styles.groupsTable}>
          GroupsTable Component
      </div>
  )
}

export default GroupsTable;