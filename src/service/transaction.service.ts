import {BaseService} from "./base.service";
import {fakerEN_IN} from "@faker-js/faker";
import {TransactionTypeEnum} from "enum";
import {Transaction} from "model";
import axios from "axios";
import Page from "../model/page";


class TransactionService implements BaseService<Transaction>{

    create(data: Transaction): Promise<Transaction> {
        return new Promise<Transaction>((resolve,reject)=>{
            resolve(data)
        })
    }

    delete(id: number): void {
    }

    index(query: string): Promise<Page<Transaction>> {
        return axios
            .get<Page<Transaction>>("http://localhost:8080/transactions")
            .then(result=>result.data)
            .catch(error=> error);
    }

    update(data: Transaction): Promise<Transaction> {
        return new Promise<Transaction>((resolve,reject)=>{
            resolve(data)
        })
    }

    get(id: number): Transaction {
        return new Transaction();
    }

}

export default TransactionService;