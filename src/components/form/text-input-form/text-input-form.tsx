import {DeepMap, FieldError, FieldValues, useController} from "react-hook-form";
import {InputProps} from "components/form/input-props";
import {TextInput} from "@mantine/core";
import React from "react";

const TextInputForm =<T extends FieldValues>(props:InputProps<T>) => {
    const {label,placeholder}=props;
    const {field,formState:{errors}} = useController<T>(props);

    return(
        <>
            <TextInput
                {...field}
                label={label}
                size={"xs"}
                placeholder={placeholder}
                error={errors[props.name] && `${(errors[props.name] as DeepMap<FieldValues, FieldError>).message}`}
            />
        </>
    )

};

export default TextInputForm;