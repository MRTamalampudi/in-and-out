import React, { useState } from "react";
import {
    NumberInput,
    NumberInputProps,
    TextInput,
    TextInputProps,
} from "@mantine/core";
import { FieldValues, useController } from "react-hook-form";
import { InputProps } from "forms/inputs/input-props";
import useErrorMessage from "forms/inputs/useErrorMessage";

function BillShareInput() {
    // const {
    //     field:{value:formValue,onChange, ...fields},
    //     formState: { errors },
    // } = useController<T>(props);
    const [value, setValue] = useState<number>(0);

    return (
        <NumberInput
            placeholder={"share"}
            value={value}
            onChange={(e) => setValue(parseInt(e.toString()))}
        />
    );
}

export default BillShareInput;
