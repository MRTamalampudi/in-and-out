import {configureStore} from "@reduxjs/toolkit";
import transactionsReducer from "./slice/transaction-slice";
import categoryReducer from "./slice/category-slice";
import splitbillGroupReducer from "./slice/split-bill-group-slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {Transaction} from "../model/transacations.model";
import {SplitBillGroup} from "../model/splitBillGroups.model";


export const store = configureStore({
    reducer:{
        transactions:transactionsReducer,
        categories:categoryReducer,
        splitBillGroup:splitbillGroupReducer,
    }
})

export type RootState = {
    transactions:Transaction[],
    categories:string[],
    splitBillGroup:SplitBillGroup[],
}

export default store;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
