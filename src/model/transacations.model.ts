import {Payment_Mode} from "../enums/filters";
import {PrimaryTerms} from "../enums/primary-terms";
import {TransactionTypes} from "../components/transaction-type/transaction-type";


export  class Transaction {
    public id?: number;
    public note?: string;
    public transactee?: string;
    public date?: string;
    public category?: string;
    public type?: TransactionTypes;
    public amount?: string;
}