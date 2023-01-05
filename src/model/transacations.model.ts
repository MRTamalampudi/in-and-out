import {Payment_Mode} from "../enums/filters";


export  class Transacation {
    public id?: number;
    public note?: string;
    public partyName?: string;
    public transactionDate?: string;
    public category?: string;
    public paymentMode?: string;
    public amount?: string;
}