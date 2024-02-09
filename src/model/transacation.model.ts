import {TransactionTypeEnum} from "enum";
import {PaymentModeEnum} from "../enum";
import Transactee, {transacteeSchema} from "./transactee.model";
import Category, {categorySchema} from "./category.model";
import { z } from "zod";


class Transaction{

    public id: number;
    public note: string;
    public transactee: Transactee;
    public date: Date;
    public category: Category;
    public type: TransactionTypeEnum;
    public amount: number;
    public paymentMode:PaymentModeEnum;

    static deserialize(entity:Transaction){
        entity.date = new Date((entity.date as unknown as number) * 1000)
        return Object.assign(new Transaction(),entity)
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