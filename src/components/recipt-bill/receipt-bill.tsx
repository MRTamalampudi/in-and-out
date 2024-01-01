import styles from "./receipt-bill.module.scss";
import { Table, TableWrapper } from "components/table";
import { createColumnHelper, getCoreRowModel, useReactTable } from "@tanstack/react-table";

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
    const dataAttr = [
        { name: "TrID", className: "flex-basis-3/20 text-align-right" },
        { name: "Note", className: "flex-basis-13/20" },
        { name: "Amount", className: "flex-basis-4/20 text-align-right" },
    ];

    const columnHelper = createColumnHelper<ReceiptData>()

    const columns = [
        columnHelper.accessor("id",{
            header:"Id",
            cell:(props)=>props.getValue(),
            meta:{
                className: "flex-basis-3/20 text-align-right"
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
                className: "flex-basis-4/20 text-align-right"
            }
        })
    ]

    const table = useReactTable({
        data:data?.map((rowData) => transformer(rowData)) || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    function renderTableHeaders() {
        return dataAttr.map((attr, index) => (
            <td key={index} className={attr.className}>
                {attr.name}
            </td>
        ));
    }

    (() => {
        if (!data) return null;

        console.log(data)

        if (transformer) {
            console.log(data.map((rowData) => transformer(rowData)));
        }
    })();

    function renderTableRows(){
        if (!data) return null;

        if (transformer) {
            console.log(data.map(rowData => transformer(rowData)))
        }

        return data.map(rowData => transformer(rowData)).map((rowData) => (
            <tr key={rowData.id}>
                {Object.values(rowData).map((cellData, cellIndex) => (
                    <td key={cellIndex} className={dataAttr[cellIndex].className}>
                        {cellData}
                    </td>
                ))}
                <td className={"flex-basis-1/20"}>

                </td>
            </tr>
        ));
    }

    return (
        <div className={styles.reciptBill}>
            <TableWrapper
                borders={false}
                height={data?.length! > 5 ? 300 : undefined}
            >
                <Table>
                    <Table.Head table={table}/>
                    <Table.Body table={table}/>
                </Table>
            </TableWrapper>
        </div>
    );
};

export default ReceiptBill;
