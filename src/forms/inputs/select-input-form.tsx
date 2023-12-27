import { FieldValues, useController } from "react-hook-form";
import { InputProps } from "forms/inputs/input-props";
import { ComboboxData, Select } from "@mantine/core";
import useErrorMessage from "forms/inputs/useErrorMessage";

function SelectInputForm<T extends FieldValues>(props:InputProps<T>&{data:ComboboxData}) {
    const {label,placeholder,data}=props;
    const {field,formState:{errors}} = useController<T>(props);
    const errorMessage = useErrorMessage(errors,props)

    return (
        <Select
            {...field}
            data={data}
            label={label}
            placeholder={placeholder}
            error={errorMessage}
        />
    )
}

export default SelectInputForm