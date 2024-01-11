import React, { FC } from 'react';
import styles from './category-select.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux";
import {TransactionTypeEnum} from "../../../../enum";
import {Select} from "@mantine/core";
import {FieldValues, useController} from "react-hook-form";
import {InputProps} from "../input-props";
import useGetTransacteeQuery from "../../../../service/react-query-hooks/transactee-query";
import {useIndexCategoryQuery} from "../../../../service/category.service";



const CategorySelect = <T extends FieldValues>(props:InputProps<T>) => {

    const {
        field:{
            value:selectedValue,
            onChange:onFieldChange,
            ...field
        }
    }=useController<T>(props);
    const categoryQuery = useIndexCategoryQuery();
    const options= categoryQuery.data?.map(
        (value) => ({
            "label":value.name,
            "value":value.id.toString(),
            "entity":value
        })
    )
    const getSelectedValue = () => {
        if(selectedValue && selectedValue.id){
            return selectedValue.id.toString();
        } else {
            return selectedValue
        }
    }

    const handleSelectChange= (e:String) => {
        const entity = options?.find(
            (d)=> d.entity.id.toString()==e
        )?.entity
        onFieldChange(entity);
    }

    return (
        <Select
            data={options || []}
            {...field}
            onChange={(e)=>{
                handleSelectChange(e!)
            }}
            value={getSelectedValue()}
            label={props.label}
            size={"xs"}
            placeholder={props.placeholder}
            searchable
        />
    )
}

export default CategorySelect;
