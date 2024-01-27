import React from "react";
import { TagsInput } from "@mantine/core";
import { FieldValues, useController } from "react-hook-form";
import useErrorMessage from "forms/inputs/useErrorMessage";
import { InputProps } from "forms/inputs/input-props";

const TagsInputForm = <T extends FieldValues>(props: InputProps<T>) => {
    const { label, placeholder } = props;

    const {
        field,
        formState: { errors },
    } = useController<T>(props);

    const errorMessage = useErrorMessage(errors, props);

    console.log(errors.emails,errorMessage)
    return (
        <TagsInput
            {...field}
            label={label}
            placeholder={placeholder}
            error={errorMessage}
            clearable
        />
    );
};

export default TagsInputForm;
