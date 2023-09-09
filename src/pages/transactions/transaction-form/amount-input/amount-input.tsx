import React from 'react';
import {NumberInput} from "@mantine/core";
import {InputProps} from "../input-props";
import {FieldValues, useController} from "react-hook-form";

const AmountInput = <T extends FieldValues>(props:InputProps<T>) => {

    const {label,placeholder}=props;

    const {field,formState} = useController<T>(props);


  return (
      <NumberInput
          {...field}
          ref={null}
          label={label}
          placeholder={placeholder}
          size={"xs"}
          icon={<span className={"f-13"}>₹</span>}
          hideControls={true}
          error={formState.errors.root?.message}
      />
  )
}
export default AmountInput;
