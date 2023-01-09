import {TransactionsData} from "../static-data/transactions";
import {Transacation} from "../model/transacations.model";
import formatters from "chart.js/dist/core/core.ticks";

const TRANSACTION = 'transaction'


const indexAll = (size:number=100,page:number=1) => {
    return JSON.parse(sessionStorage.getItem(TRANSACTION)!).slice((page-1)*size,page*size)
}

const create = (transaction:Transacation) => {
    let data:Transacation[] = JSON.parse(sessionStorage.getItem(TRANSACTION)!)
    transaction.id = data.length
    data.push(transaction)
    sessionStorage.setItem(TRANSACTION,JSON.stringify(data))
    return data;
}

const destroy = (id:number) => {
    let data:Transacation[] = JSON.parse(sessionStorage.getItem(TRANSACTION)!)
    data.splice(id,1)
    data.forEach((value,index)=>value.id!>id ? data[index].id=value.id!-1 : null)
    sessionStorage.setItem(TRANSACTION,JSON.stringify(data))
    return data
}

export const TransactionService = {
    indexAll,
    create,
    destroy
}