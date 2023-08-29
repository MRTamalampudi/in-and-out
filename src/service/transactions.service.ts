import {BaseService} from "./base-service";
import {Transaction} from "../model/transacations.model";
import {useDispatch} from "react-redux";
import {fakerEN_IN} from "@faker-js/faker";
import {TransactionTypes} from "../components/transaction-type/transaction-type";


class TransactionsService implements BaseService<Transaction>{

    create(data: Transaction): Transaction {
        return data;
    }

    delete(id: number): void {
    }

    index(query: string): Transaction[] {
        const data_:Transaction[] = []
        for (let i = 0; i < 20; i++) {
            data_.push({
                id:i,
                note: fakerEN_IN.word.words({count:{min:3,max:5}}),
                transactee: fakerEN_IN.person.firstName(),
                date: fakerEN_IN.date.anytime().toLocaleDateString(),
                category: fakerEN_IN.commerce.department(),
                type: TransactionTypes.OWE,
                amount:`$${fakerEN_IN.finance.amount({min:100,max:500,dec:0})}`
            })
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