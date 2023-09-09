import {BaseService} from "./base-service";
import {Transaction} from "../model/transacations.model";
import {fakerEN_IN} from "@faker-js/faker";
import {TransactionTypeEnum} from "../enums";


class TransactionsService implements BaseService<Transaction>{

    create(data: Transaction): Transaction {
        return data;
    }

    delete(id: number): void {
    }

    index(query: string): Transaction[] {
        const data_: Transaction[] = []
        for (let i = 0; i < 20; i++) {
            const transaction:Transaction = new Transaction();
            transaction.id = i;
            transaction.note = fakerEN_IN.word.words({count:{min:3,max:5}});
            transaction.transactee = fakerEN_IN.person.firstName();
            transaction.category = fakerEN_IN.commerce.department();
            transaction.date =  fakerEN_IN.date.anytime();
            transaction.type = TransactionTypeEnum.OWE;
            transaction.amount = `$${fakerEN_IN.finance.amount({min:100,max:500,dec:0})}`;
            data_.push(transaction)
        }
        return data_;
    }

    update(data: Transaction): Transaction {

        return data;
    }

    get(id: number): Transaction {
        return new Transaction();
    }

}

export default TransactionsService;