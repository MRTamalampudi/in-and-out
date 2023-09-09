import React, { FC } from 'react';
import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {InputProps} from "../input-props";
import {TextInput} from "@mantine/core";

const NoteInput = <T extends FieldValues>(props:InputProps<T>) => {

    const {label,placeholder}= props;

    const {field}= useController<T>(props);

    return (
        <TextInput
            {...field}
            label={label}
            size={"xs"}
            placeholder={placeholder}
        />
    )
}

export default NoteInput;
