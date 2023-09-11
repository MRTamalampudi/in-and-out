import {TransactionTypeEnum} from "enums";
import {PaymentModeEnum} from "../enums";


export  class Transaction {
    public id: number;
    public note: string;
    public transactee: string;
    public date: Date;
    public category: string;
    public type: TransactionTypeEnum;
    public amount: number;
    public paymentMode:PaymentModeEnum;
}