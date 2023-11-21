import { z } from "zod";
import {Transactee, Transaction, Category} from "model";
import formEssentialsType from "./form-essentials";
import {PaymentModeEnum, TransactionTypeEnum} from "enum";
import {transactionSchema} from "../../model/transacation.model";

const useTransactionFormEssentials = ():formEssentialsType<Transaction> => {

    // @ts-ignore
    const schema = transactionSchema;

    const defaultValues:Partial<Transaction> = {
        date:new Date(),
        paymentMode:undefined,
        type:undefined,
    }

    const emptyValues:Partial<Transaction>= {
        paymentMode: undefined,
        type: undefined,
        amount: 0,
        date: new Date(),
        category: new Category(),
        note: "",
        transactee: new Transactee(),
    }

    return {
        schema,
        defaultValues,
        emptyValues
    }
}

export default useTransactionFormEssentials;