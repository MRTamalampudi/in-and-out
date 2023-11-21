import {DeepMap, FieldError, FieldValues, useController} from "react-hook-form";
import {InputProps} from "forms/inputs/input-props";
import {TextInput} from "@mantine/core";
import React from "react";
import useErrorMessage from "../useErrorMessage";

const TextInputForm =<T extends FieldValues>(props:InputProps<T>) => {

    const {label,placeholder}=props;
    const {field,formState:{errors}} = useController<T>(props);

    const errorMessage = useErrorMessage(errors,props)

    return(
        <>
            <TextInput
                {...field}
                label={label}
                size={"xs"}
                placeholder={placeholder}
                error={errorMessage}
            />
        </>
    )

};

export default TextInputForm;