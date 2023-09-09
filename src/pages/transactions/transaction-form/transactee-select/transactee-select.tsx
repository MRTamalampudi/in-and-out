import React, { FC } from 'react';
import styles from './transactee-select.module.scss';
import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {InputProps} from "../input-props";
import {TextInput} from "@mantine/core";

const TransacteeSelect = <T extends FieldValues>(props:InputProps<T>) => {

    const {field}=useController<T>(props);

    return (
        <TextInput
            {...field}
            label={props.label}
            size={"xs"}
            placeholder={props.placeholder}
        />
    )
}

export default TransacteeSelect;
