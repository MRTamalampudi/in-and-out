import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Transaction} from "pages/transactions/transactions-table/transactions-table";
import {TransactionTypeEnum} from "enums";



const initialState:Transaction[] = [
    {
        id:21,
        amount:"Testing",
        transactee:"test",
        date:"adsfdsad",
        type:TransactionTypeEnum.OWE,
        note:"sdsa",
        category:"esd",
    }
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