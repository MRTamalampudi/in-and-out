import React, { FC } from 'react';
import styles from './transactee-select.module.scss';
import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {InputProps} from "../input-props";
import {Select, TextInput} from "@mantine/core";
import transacteeQuery from "../../../../service/react-query-hooks/transactee-query";
import useGetTransacteeQuery from "../../../../service/react-query-hooks/transactee-query";
import {Transactee} from "../../../../model";

const TransacteeSelect = <T extends FieldValues>(props:InputProps<T>) => {

    const {
        field:{
            value:selectedValue,
            onChange:onFieldChange,
            ...field
        }
    }=useController<T>(props);
    const transacteeQuery = useGetTransacteeQuery();
    const options= transacteeQuery.data?.content.map(
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
        />
    )
}

export default TransacteeSelect;
