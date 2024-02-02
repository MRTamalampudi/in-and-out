import React from "react";
import { FieldValues, useController } from "react-hook-form";
import { Select } from "@mantine/core";
import { InputProps } from "forms/inputs/input-props";
import { useGetSplitBillGroup } from "service/react-query-hooks/split-bill-group.query";

const PaidBy = <T extends FieldValues>(props: InputProps<T>) => {
    const {
        field: { value: selectedValue, onChange: onFieldChange, ...field },
    } = useController<T>(props);
    const {data} = useGetSplitBillGroup(1);
    const options = data?.memberList.map((value) => ({
        label: value.member.getFullName(),
        value: value.member.id.toString(),
        entity: value.member,
    }));

    const getSelectedValue = () => {
        if (selectedValue && selectedValue.id) {
            return selectedValue.id.toString();
        } else {
            return selectedValue;
        }
    };

    const handleSelectChange = (e: String) => {
        const entity = options?.find((d) => d.entity.id.toString() == e)
            ?.entity;
        onFieldChange(entity);
    };

    return (
        <Select
            data={options || []}
            {...field}
            onChange={(e) => {
                handleSelectChange(e!);
            }}
            value={getSelectedValue()}
            label={props.label}
            size={"xs"}
            placeholder={props.placeholder}
            searchable
        />
    );
};

export default PaidBy;
