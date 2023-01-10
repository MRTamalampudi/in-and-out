import Card from "../../components/atoms/card/card";
import TransactionSummary from "../../components/atoms/transaction-summary/transaction-summary";
import {useEffect, useState} from "react";
import {Transacation} from "../../model/transacations.model";
import {TransactionService} from "../../service/transaction.service";
import {Loader} from "@mantine/core";

export const TransactionsSummary = () => {
    const [data,setData] = useState<Transacation[]>();
    useEffect(()=>{
        setData(TransactionService.indexAll(5))
    },[])
    const Transactions = () => {
        return(
         <>
             {
                 data?.map((transaction)=>
                     <TransactionSummary title={transaction.partyName!}
                                         time={transaction.transactionDate!}
                                         amount={transaction.amount!} />
                 )
             }
         </>
        )
    }
  return (
      <Card title={"Transactions"} seeAll={true} subtitle={"Latest"}>
          {data ? <Transactions/> : <Loader/>}
      </Card>
  )
}