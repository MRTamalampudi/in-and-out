import {Payment_Mode} from "../enums/filters";
import {PrimaryTerms} from "../enums/primary-terms";


export  class Transacation {
    public id?: number;
    public note?: string;
    public partyName?: string;
    public transactionDate?: string;
    public category?: string;
    public paymentMode?: string;
    public amount?: string;
    public type?:PrimaryTerms.CASH_IN|PrimaryTerms.CASH_OUT;
}