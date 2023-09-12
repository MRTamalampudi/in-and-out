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
        },
        edit(state,action:PayloadAction<Transaction>){
           const index =  state.findIndex(value => value.id == action.payload.id);
           state[index] = action.payload;
        }
    }
})
export const {
    add,
    setProducts,
    edit
} = transactionSlice.actions;
export default transactionSlice.reducer;