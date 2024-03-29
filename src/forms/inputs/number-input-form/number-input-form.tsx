import { FieldValues, useController } from "react-hook-form";
import { InputProps } from "forms/inputs/input-props";
import { NumberInput, TextInput } from "@mantine/core";
import React from "react";
import useErrorMessage from "../useErrorMessage";

const NumberInputForm =<T extends FieldValues>(props:InputProps<T>) => {

    const {label,placeholder}=props;
    const {field,formState:{errors}} = useController<T>(props);

    const errorMessage = useErrorMessage(errors,props)

    return(
        <>
            <NumberInput
                {...field}
                label={label}
                size={"xs"}
                placeholder={placeholder}
                error={errorMessage}
                hideControls
            />
        </>
    )

};

export default NumberInputForm;