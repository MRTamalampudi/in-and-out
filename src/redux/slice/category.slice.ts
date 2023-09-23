import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState:string[] =[
        "Food and Groceries",
        "Transportation",
        "Rent/Mortgage",
        "Utilities",
        "Entertainment",
        "Shopping",
        "Personal Care",
        "Health and Medical",
        "Travel",
        "Education",
        "Insurance",
        "Taxes",
        "Gifts"
]

const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{
        add(state,action:PayloadAction<string>){
            state.push(action.payload);
        },
        index(state,action:PayloadAction<string[]>){
            return [...action.payload]
        },
    }
})

export const {
    add,
    index
} = categorySlice.actions;
export default categorySlice.reducer;