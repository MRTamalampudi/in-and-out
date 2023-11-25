import {BaseService} from "./base.service";
import {fakerEN_IN} from "@faker-js/faker";
import {TransactionTypeEnum} from "enum";
import {Transaction} from "model";
import axios from "axios";
import Page from "../model/page";
import * as process from "process";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;



export function indexTransactions(page:number=0):Promise<Page<Transaction>> {
    return axios
        .get<Page<Transaction>>(process.env.REACT_APP_API_KEY+"/transactions?page="+`${page!=0 ? page-1 : 0}`)
        .then(result=>result.data)
        .catch(error=> error);
}

export function getTransaction(id: number): Promise<Transaction> {
    return axios.get<Transaction>(process.env.REACT_APP_API_KEY+"/transactions/"+id)
        .then(response=> Transaction.deserialize(response.data))
        .catch(error => error)
}

export function createTransaction(transaction:Transaction):Promise<Transaction> {
    return axios
        .post(
            process.env.REACT_APP_API_KEY+"/transactions",
            transaction
        )
        .then(response => response.data)
        .catch(error => error)
}

