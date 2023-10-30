import {Dispatch, SetStateAction} from "react";

export type tableRowProps <T extends {id:number}>= {
    data:T,
    setSelectionList:Dispatch<SetStateAction<number[]>>;
    checked:boolean;
}
