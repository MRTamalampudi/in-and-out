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

    static deserialize(object:any):Transaction{
        const transaction:Transaction = {
            ...object,
            date:new Date(object.date*1000)
        };



        return transaction;
    }
}

export default Transaction;