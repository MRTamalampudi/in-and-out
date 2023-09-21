import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState:number[] = []


const splitBillSlice = createSlice({
    name: "splitBill",
    initialState,
    reducers:{
        add(state,action:PayloadAction<number>){
            state.push(action.payload);
        }
    }
})


export const {
    add
} = splitBillSlice.actions;

export default splitBillSlice.reducer;