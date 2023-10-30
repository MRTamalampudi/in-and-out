import Page from "../model/page";


export interface BaseService<T>{
    index: (query: string)=>Promise<Page<T>>,
    get:(id:number)=>T,
    create: (data: T)=>Promise<T>,
    update:(data:T)=>Promise<T>,
    delete:(id:number)=>void
}