import React, { FC } from 'react';
import styles from './category-select.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux";
import {TransactionTypeEnum} from "../../../../enums";
import {Select} from "@mantine/core";
import {FieldValues, useController} from "react-hook-form";
import {InputProps} from "../input-props";



const CategorySelect = <T extends FieldValues>(props:InputProps<T>) => {

    const {field}=useController<T>(props);


    const data = useSelector((state:RootState) => state.categories).map((data_:string)=>{return {"value":data_,"label":data_}})

    interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
        value:TransactionTypeEnum;
    }



    return (
        <>
            <Select
                {...field}
                data={data}
                size={"xs"}
                label={props.label}
                placeholder={props.placeholder}
                maxDropdownHeight={200}
            />
        </>
    )
}

export default CategorySelect;
