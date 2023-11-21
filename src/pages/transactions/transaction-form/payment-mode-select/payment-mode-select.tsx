import {PaymentModeEnum} from "enum";
import React, {forwardRef} from "react";
import CustomSelectItem from "components/custom-select-item";
import {Menu, Select} from "@mantine/core";
import Label = Menu.Label;
import {useController} from "react-hook-form";
import {PaymentMode} from "../../../../enum/payment-mode.enum";



const PaymentModeSelect = (props:any) => {

    const {field} = useController(props)

    // @ts-ignore
    const data = Object.values(PaymentModeEnum)
        .map((value:PaymentModeEnum) => ({ value:value.valueOf(), label: value}));

    console.log(field.value,PaymentModeEnum.CASH)
    return (
        <>
            <Select
                {...field}
                data={data}
                size={"xs"}
                label={props.label}
                placeholder={props.placeholder}
                maxDropdownHeight={200}
            />
        </>
    )
}

export default PaymentModeSelect;