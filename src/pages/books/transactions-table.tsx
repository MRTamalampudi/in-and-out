import {Select, Table} from '@mantine/core';
import Card from "../../components/atoms/card/card";
import {Cash_Flow, Payment_Mode, Period} from "../../enums/filters";
import styles from "./books.module.scss";

const elements = [
    {position: 6, mass: 12.011, symbol: 'C', name: 'Carbon'},
    {position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen'},
    {position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium'},
    {position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium'},
    {position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium'},
];

const data = [
    {
        note: 'Spent money on breakfast',
        partyName: 'Krishna Sagar',
        transactionDate: '12-12-2022',
        category: 'Food',
        paymentMode: 'Online',
        amount: '$5000'
    },
    {
        note: 'Spent money on breakfast',
        partyName: 'Krishna Sagar',
        transactionDate: '12-12-2022',
        category: 'Food',
        paymentMode: 'Online',
        amount: '$5000'
    },{
        note: 'Spent money on breakfast',
        partyName: 'Krishna Sagar',
        transactionDate: '12-12-2022',
        category: 'Food',
        paymentMode: 'Online',
        amount: '$5000'
    },
    {
        note: 'Spent money on breakfast',
        partyName: 'Krishna Sagar',
        transactionDate: '12-12-2022',
        category: 'Food',
        paymentMode: 'Online',
        amount: '$5000'
    },{
        note: 'Spent money on breakfast',
        partyName: 'Krishna Sagar',
        transactionDate: '12-12-2022',
        category: 'Food',
        paymentMode: 'Online',
        amount: '$5000'
    },
    {
        note: 'Spent money on breakfast',
        partyName: 'Krishna Sagar',
        transactionDate: '12-12-2022',
        category: 'Food',
        paymentMode: 'Online',
        amount: '$5000'
    },
    {
        note: 'Spent money on breakfast',
        partyName: 'Krishna Sagar',
        transactionDate: '12-12-2022',
        category: 'Food',
        paymentMode: 'Online',
        amount: '$5000'
    },
    {
        note: 'Spent money on breakfast',
        partyName: 'Krishna Sagar',
        transactionDate: '12-12-2022',
        category: 'Food',
        paymentMode: 'Online',
        amount: '$5000'
    },{
        note: 'Spent money on breakfast',
        partyName: 'Krishna Sagar',
        transactionDate: '12-12-2022',
        category: 'Food',
        paymentMode: 'Online',
        amount: '$5000'
    },
    {
        note: 'Spent money on breakfast',
        partyName: 'Krishna Sagar',
        transactionDate: '12-12-2022',
        category: 'Food',
        paymentMode: 'Online',
        amount: '$5000'
    },{
        note: 'Spent money on breakfast',
        partyName: 'Krishna Sagar',
        transactionDate: '12-12-2022',
        category: 'Food',
        paymentMode: 'Online',
        amount: '$5000'
    },
    {
        note: 'Spent money on breakfast',
        partyName: 'Krishna Sagar',
        transactionDate: '12-12-2022',
        category: 'Food',
        paymentMode: 'Online',
        amount: '$5000'
    }
]


export const TransactionsTable = () => {
    const rows = data.map((row) => (
        <tr key={row.note} className={styles.table1}>
            <td>{row.note}</td>
            <td>{row.partyName}</td>
            <td>{row.transactionDate}</td>
            <td>{row.category}</td>
            <td>{row.paymentMode}</td>
            <td>{row.amount}</td>
            <td>
                <div className={styles.actions}>
                    <i className={'fa-account-circle'} />
                    <i className={'fa-upload'}/>
                </div>
            </td>
        </tr>
    ));


    return (
        <Card title={"Transactions"} subtitle={"#100"} >
            <Table striped={true}  verticalSpacing={"xs"} horizontalSpacing={"xl"} highlightOnHover={true}>
                <thead style={{position:"sticky",top:0}}>
                <tr>
                    <th>Note</th>
                    <th>Party Name</th>
                    <th>Transaction Date</th>
                    <th>Category</th>
                    <th>Payment Mode</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </Card>
    );
}

