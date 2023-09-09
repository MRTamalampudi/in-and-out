import React, { FC } from 'react';
import styles from './amount-input.module.scss';
import {TextInput} from "@mantine/core";
import {InputProps} from "../input-props";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {useGlobalConstants} from "../../../../constants";

const AmountInput = <T extends FieldValues>(props:InputProps<T>) => {

    const {label,placeholder}=props;

    const {field,formState} = useController<T>(props);


  return (
      <TextInput
          {...field}
          ref={null}
          label={label}
          placeholder={placeholder}
          size={"xs"}
          icon={<span className={"f-13"}>₹</span>}
      />
  )
}
export default AmountInput;
