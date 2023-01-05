import {TransactionsData} from "../static-data/transactions";
import {Transacation} from "../model/transacations.model";
import formatters from "chart.js/dist/core/core.ticks";

export class TransactionService {
    readonly TRANSACTION = 'transaction'
    constructor() {
        if(!localStorage.getItem(this.TRANSACTION)){
            localStorage.setItem(this.TRANSACTION,JSON.stringify(TransactionsData))
        }
    }
    public indexAll(size:number=10,page:number=1){
        return JSON.parse(localStorage.getItem(this.TRANSACTION)!).slice((page-1)*size,page*size)
    }

    public create(transaction:Transacation){
        let data:Transacation[] = JSON.parse(localStorage.getItem(this.TRANSACTION)!)
        transaction.id = data[data.length-1].id
        data.push(transaction)
        localStorage.setItem(this.TRANSACTION,JSON.stringify(data))
        return data;
    }

    public delete(id:number){
        let data:Transacation[] = JSON.parse(localStorage.getItem(this.TRANSACTION)!)
        data.slice(id,1)
        data.forEach((value,index)=>value.id!>id ? data[index].id=value.id!-1 : null)
        localStorage.setItem(this.TRANSACTION,JSON.stringify(data))
        return data
    }
}