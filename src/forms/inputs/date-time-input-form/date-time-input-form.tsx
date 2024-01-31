import {DeepMap, FieldError, FieldValues, useController} from "react-hook-form";
import {InputProps} from "forms/inputs/input-props";
import {TextInput} from "@mantine/core";
import React from "react";
import useErrorMessage from "../useErrorMessage";
import { DateInput, DateTimePicker } from "@mantine/dates";
import DateTimeSelect from "pages/transactions/transaction-form/date-time-select";

const DateTimeInputForm =<T extends FieldValues>(props:InputProps<T>) => {

    const {label,placeholder}=props;
    const {field,formState:{errors}} = useController<T>(props);

    const errorMessage = useErrorMessage(errors,props)

    return(
        <>
            <DateTimePicker
                {...field}
                label={label}
                size={"xs"}
                placeholder={placeholder}
                error={errorMessage}
            />
        </>
    )

};

export default DateTimeInputForm;