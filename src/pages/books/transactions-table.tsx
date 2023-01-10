import {Table} from '@mantine/core';
import Card from "../../components/atoms/card/card";
import styles from "./books.module.scss";
import {useEffect, useState} from "react";
import {Transacation} from "../../model/transacations.model";
import {TransactionService} from "../../service/transaction.service";
import TransactionModal from "../../components/transaction-modal/transaction-modal";
import {PrimaryTerms} from "../../enums/primary-terms";

const elements = [
    {position: 6, mass: 12.011, symbol: 'C', name: 'Carbon'},
    {position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen'},
    {position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium'},
    {position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium'},
    {position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium'},
];



export const TransactionsTable = () => {
    const [isEdit,setIsEdit]=useState<boolean>(false)
    const [transactionData,setTransactionData]=useState<Transacation[]>();

    const destroy = (id:number) =>{
        setTransactionData(TransactionService.destroy(id))
    }

    useEffect(()=>{
        setTransactionData(TransactionService.indexAll());
    },[])


    const rows = transactionData?.map((row) => (
        <tr key={row.id} className={styles.table1}>
            <td>{row.note}</td>
            <td>{row.partyName}</td>
            <td>{row.transactionDate}</td>
            <td>{row.category}</td>
            <td>{row.paymentMode}</td>
            <td>{row.amount}</td>
            <td>
                <div className={styles.actions}>
                    <i className={'fa-account-circle'} onClick={() => destroy(row.id!)} />
                    <TransactionModal transactionType={PrimaryTerms.CASH_OUT}
                                      isEdit={true}
                                      trasaction={row}
                                      openButton={<i className={'fa-upload'} onClick={()=>setIsEdit((prevState)=>!prevState)}/>}/>
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

