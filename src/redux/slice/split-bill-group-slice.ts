import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SplitBillGroup} from "../../model/splitBillGroups.model";
import {netflix} from "../../assets";
import {fakerEN_IN} from "@faker-js/faker";
import {Transaction} from "../../model/transacations.model";

const splitBillGroup:SplitBillGroup = new SplitBillGroup();
splitBillGroup.id = 1;
splitBillGroup.avatar = netflix;
splitBillGroup.name = fakerEN_IN.word.words({count:{min:2,max:3}});
splitBillGroup.lentShare = parseInt(fakerEN_IN.finance.amount({min:20,max:99,dec:0}));
splitBillGroup.oweShare = parseInt(fakerEN_IN.finance.amount({min:20,max:99,dec:0}));

const initialState:SplitBillGroup[] = [
    splitBillGroup
];



const splitBillGroupSlice = createSlice({
    name:"splitBillGroups",
    initialState,
    reducers:{
        add(state,action:PayloadAction<SplitBillGroup>){
            state.push(action.payload);
        },
        index(state,action:PayloadAction<SplitBillGroup[]>){
            return [...action.payload]
        },
        update(state,action:PayloadAction<SplitBillGroup>){
            const index =  state.findIndex(value => value.id == action.payload.id);
            state[index] = action.payload;
        }
    }
})

export const {
    add,
    index,
    update
} = splitBillGroupSlice.actions;
export default splitBillGroupSlice.reducer;