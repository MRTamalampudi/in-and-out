import Card from "../../components/atoms/card/card";
import TransactionSummary from "../../components/atoms/transaction-summary/transaction-summary";

export const TransactionsSummary = () => {
  return (
      <Card title={"Transactions"} seeAll={true} subtitle={"Latest"}>
          <TransactionSummary  title={'Netflix'} time={'Expires Today'} amount={'$5000'}/>
          <TransactionSummary  title={'Netflix'} time={'Expires Today'} amount={'$5000'}/>
          <TransactionSummary  title={'Netflix'} time={'Expires Today'} amount={'$5000'}/>
      </Card>
  )
}