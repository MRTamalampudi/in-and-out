import styles from "./receipt-bill.module.scss";
import Table from "components/table";
import Thead from "components/table/thead";
import { Tbody } from "components/table/tbody";

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

    return (
        <div className={styles.reciptBill}>
            <Table borders={false} height={data?.length! > 5 ? 300 : undefined}>
                <Thead checkBox={false}>
                    {dataAttr.map((attr) => (
                        <td className={attr.className}>{attr.name}</td>
                    ))}
                </Thead>
                <Tbody>
                    {
                        data?.map((data1)=>{
                            return (
                                <tr>
                                    {
                                        Object.values(data1).map((data2,index)=>{
                                            return <td className={dataAttr[index].className}>{data2}</td>
                                        })
                                    }
                                    <td className={"flex-basis-1/20"}>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
        </div>
    );
};

export default ReceiptBill;
