import {Transaction} from "../model/transacations.model";

export interface BaseService<T>{
    index:(query:string)=>T[],
    get:(id:number)=>T,
    create: (data: T)=>Promise<T>,
    update:(data:T)=>T,
    delete:(id:number)=>void
}