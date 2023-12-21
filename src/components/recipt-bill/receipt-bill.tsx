import styles from "./receipt-bill.module.scss";
import { Table, TableWrapper } from "components/table";

export type ReceiptBillProps = {
    data?: ReceiptData[];
};

export type ReceiptData = {
    id:number,
    note:string,
    amount:string,
}
const ReceiptBill =({data}: ReceiptBillProps) => {
    const dataAttr = [
        { name: 'TrID', className: 'flex-basis-3/20 text-align-right' },
        { name: 'Note', className: 'flex-basis-13/20' },
        { name: 'Amount', className: 'flex-basis-4/20 text-align-right' }
    ]

    function renderTableHeaders() {
        return dataAttr.map((attr, index) => (
            <td key={index} className={attr.className}>
                {attr.name}
            </td>
        ));
    }

    function renderTableRows(){
        if (!data) return null;

        return data.map((rowData) => (
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
            <TableWrapper borders={false} height={data?.length! > 5 ? 300 : undefined}>
                <Table>
                    <Table.Head checkBox={false}>
                        {renderTableHeaders()}
                    </Table.Head>
                    <Table.Body>
                        {renderTableRows()}
                    </Table.Body>
                </Table>
            </TableWrapper>
        </div>
    );
};

export default ReceiptBill;
