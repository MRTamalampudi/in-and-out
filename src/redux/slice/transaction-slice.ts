import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {TransactionTypeEnum} from "enums";
import {Transaction} from "../../model/transacations.model";



const initialState:Transaction[] = [
    new Transaction(),
];


const transactionSlice = createSlice({
    name:"transaction",
    initialState,
    reducers: {
        add(state,action:PayloadAction<Transaction>){
            state.push(action.payload);
        },
        setProducts(state,action:PayloadAction<Transaction[]>){
            return [...action.payload]
        }
    }
})
export const {add,setProducts} = transactionSlice.actions;
export default transactionSlice.reducer;