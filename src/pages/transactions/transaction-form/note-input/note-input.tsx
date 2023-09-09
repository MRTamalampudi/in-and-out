import React, { FC } from 'react';
import {DeepMap, FieldError, FieldValues, useController, UseControllerProps} from "react-hook-form";
import {InputProps} from "../input-props";
import {TextInput} from "@mantine/core";

const NoteInput = <T extends FieldValues>(props:InputProps<T>) => {

    const {label,placeholder}= props;

    const {field,formState:{errors}}= useController<T>(props);

    return (
        <TextInput
            {...field}
            label={label}
            size={"xs"}
            placeholder={placeholder}
            error={errors[props.name] && `${(errors[props.name] as DeepMap<FieldValues, FieldError>).message}`}
        />
    )
}

export default NoteInput;
