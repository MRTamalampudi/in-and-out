import {DeepMap, FieldError, FieldValues, useController} from "react-hook-form";
import {InputProps} from "forms/inputs/input-props";
import {PasswordInput} from "@mantine/core";
import React from "react";

const PasswordInputForm =<T extends FieldValues>(props:InputProps<T>) => {
    const {label,placeholder}=props;
    const {field,formState:{errors}} = useController<T>(props);

    return(
        <>
            <PasswordInput
                {...field}
                label={label}
                size={"xs"}
                placeholder={placeholder}
                error={errors[props.name] && `${(errors[props.name] as DeepMap<FieldValues, FieldError>).message}`}
            />
        </>
    )

};

export default PasswordInputForm;