import React from 'react';
import {NumberInput} from "@mantine/core";
import {InputProps} from "../input-props";
import {FieldValues, useController} from "react-hook-form";
import useErrorMessage from "forms/inputs/useErrorMessage";

const AmountInputForm = <T extends FieldValues>(props:InputProps<T>) => {

    const {label,placeholder}=props;

    const {field,formState:{errors}} = useController<T>(props);

    const errorMessage = useErrorMessage(errors,props)

  return (
      <NumberInput
          {...field}
          ref={null}
          label={label}
          placeholder={placeholder}
          size={"xs"}
          leftSection={<span className={"f-13"}>₹</span>}
          hideControls={true}
          error={errorMessage}
      />
  )
}
export default AmountInputForm;
