import {BaseService} from "./base.service";
import {fakerEN_IN} from "@faker-js/faker";
import {TransactionTypeEnum} from "enum";
import {Transaction} from "model";
import axios from "axios";
import Page from "../model/page";
import * as process from "process";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


const TRANSACTIONS_BASE_URL = process.env.REACT_APP_API_KEY+"/transactions";

export function indexTransactions(page:number=0,note:string=""):Promise<Page<Transaction>> {
    const adjustedPage = page !== 0 ? page - 1 : 0;
    const url= `${TRANSACTIONS_BASE_URL}?page=${adjustedPage}&sort=createdAt,desc&q=note~${note}`
    return axios
        .get<Page<Transaction>>(url)
        .then(result=>result.data)
        .catch(error=> error);
}

export function getTransaction(id: number): Promise<Transaction> {
    return axios
        .get<Transaction>(`${TRANSACTIONS_BASE_URL}/${id}`)
        .then(response=> Transaction.deserialize(response.data))
        .catch(error => error)
}

export function createTransaction(transaction:Transaction):Promise<Transaction> {
    return axios
        .post(
            TRANSACTIONS_BASE_URL,
            transaction
        )
        .then(response => response.data)
        .catch(error => error)
}

export function deleteTransaction(transactionId:number):Promise<unknown> {
    return axios
        .delete(`${TRANSACTIONS_BASE_URL}/${transactionId}`)
        .catch(error => error)
}

