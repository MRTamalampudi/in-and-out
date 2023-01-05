import styles from './dashboard.module.scss';
import TransactionSummary from "../../components/atoms/transaction-summary/transaction-summary";
import Card from "../../components/atoms/card/card";

export const SubscriptionsDashboard = () => {
    return (
        <Card title={'Subscriptions'} seeAll={true}>
            <TransactionSummary  title={'Netflix'} time={'Expires Today'} amount={'$5000'}/>
            <TransactionSummary  title={'Netflix'} time={'Expires Today'} amount={'$5000'}/>
            <TransactionSummary  title={'Netflix'} time={'Expires Today'} amount={'$5000'}/>
            <TransactionSummary  title={'Netflix'} time={'Expires Today'} amount={'$5000'}/>
        </Card>
    )
}