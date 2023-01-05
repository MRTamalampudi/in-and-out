import Card from "../../components/atoms/card/card";
import TransactionSummary from "../../components/atoms/transaction-summary/transaction-summary";

export const BillsDashboard = () => {
  return (
      <Card title={'Bills'} seeAll={true}>
          <TransactionSummary  title={'Netflix'} time={'Expires Today'} amount={'$5000'}/>
          <TransactionSummary  title={'Netflix'} time={'Expires Today'} amount={'$5000'}/>
          <TransactionSummary  title={'Netflix'} time={'Expires Today'} amount={'$5000'}/>
          <TransactionSummary  title={'Netflix'} time={'Expires Today'} amount={'$5000'}/>
      </Card>
  )
}