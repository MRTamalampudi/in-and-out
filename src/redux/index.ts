import {configureStore} from "@reduxjs/toolkit";
import transactionsReducer from "./slice/transaction-slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const store = configureStore({
    reducer:{
        transactions:transactionsReducer,
    }
})

export default store;
// @ts-ignore
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
