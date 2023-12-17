import {TransactionTypeEnum} from "enum";
import {PaymentModeEnum} from "../enum";
import Transactee, {transacteeSchema} from "./transactee.model";
import Category, {categorySchema} from "./category.model";
import { z } from "zod";
import Deserialiser from "./deserialiser";


class Transaction implements Deserialiser{
    deserialize(object: any): this {
        const transaction:this = {
            ...object,
            date:new Date(object.date*1000)
        };

        return transaction;
    }

    public id: number;
    public note: string;
    public transactee: Transactee;
    public date: Date;
    public category: Category;
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

// @ts-ignore
export const transactionSchema = z.object<Transaction>({
    note: z.string().min(1,"Note is required"),
    date:z.date(),
    amount:z.number().min(1,{message:"Please enter amount"}),
    paymentMode:z.string().min(1,{message:"please enter payment mode"}),
    type:z.string().min(1),
    // @ts-ignore
    transactee:transacteeSchema,
    category: categorySchema,
    id:z.number().optional()
})

export default Transaction;