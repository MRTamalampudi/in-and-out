import { FieldValues, useController } from "react-hook-form";
import { InputProps } from "forms/inputs/input-props";
import { Select } from "@mantine/core";
import React from "react";
import { SplitAlgo } from "enum";

const SplitAlgoSelect = <T extends FieldValues>(props: InputProps<T>) => {
    const {
        field,
    } = useController<T>(props);


    const options = Object.values(SplitAlgo).map((value) => ({
        label: value,
        value: value,
    }));


    return (
        <Select
            data={options || []}
            {...field}
            label={props.label}
            size={"xs"}
            placeholder={props.placeholder}
            searchable
        />
    );
};

export default SplitAlgoSelect;