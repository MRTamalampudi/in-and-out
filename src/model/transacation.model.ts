import {TransactionTypeEnum} from "enum";
import {PaymentModeEnum} from "../enum";


class Transaction {
    public id: number;
    public note: string;
    public transactee: string;
    public date: Date;
    public category: string;
    public type: TransactionTypeEnum;
    public amount: number;
    public paymentMode:PaymentModeEnum;


}

export default Transaction;