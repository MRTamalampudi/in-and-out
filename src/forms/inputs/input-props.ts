import {FieldValues, UseControllerProps} from "react-hook-form";

export type InputProps <T extends FieldValues>= {
    label?:string,
    placeholder?:string,
    name:string,
} & UseControllerProps<T>;