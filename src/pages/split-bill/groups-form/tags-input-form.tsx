import React from "react";
import { TagsInput } from "@mantine/core";
import { FieldValues, useController } from "react-hook-form";
import useErrorMessage from "forms/inputs/useErrorMessage";
import { InputProps } from "pages/transactions/transaction-form/input-props";

const TagsInputForm =<T extends FieldValues>(props:InputProps<T>) => {
    const {label,placeholder}=props;

    const {field:{value,onChange,...field},formState:{errors,}} = useController<T>(props);

    const errorMessage = useErrorMessage(errors,props)
    return (
        <TagsInput {...field} label={"Enter member emails"} clearable/>
    );
};

export default TagsInputForm;