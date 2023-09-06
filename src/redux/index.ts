import {configureStore} from "@reduxjs/toolkit";
import transactionsReducer from "./slice/transaction-slice";
import categoryReducer from "./slice/category-slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {Transaction} from "../model/transacations.model";


export const store = configureStore({
    reducer:{
        transactions:transactionsReducer,
        categories:categoryReducer,
    }
})

export type RootState = {
    transactions:Transaction[],
    categories:string[],
}

export default store;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
