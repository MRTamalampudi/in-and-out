import React from 'react';
import styles from './split-bill.module.scss';
import Table from "../../components/table/table";
import BillGroup from "./bill-group/bill-group";

interface SplitBillProps {}

const SplitBill = (
    {}:SplitBillProps
) => {
    return (
        <div className={styles.SplitBill}>
            <div className={styles.left}>
                <Table title={"Groups"}>
                    <tbody>
                    <tr>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            <div className={styles.right}>
                <BillGroup/>
            </div>
        </div>
    )
}

export default SplitBill;
