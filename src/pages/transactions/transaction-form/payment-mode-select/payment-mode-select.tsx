import {PaymentModeEnum} from "../../../../enums";
import {PaymentModeAttributes} from "../../../../enumAttributes";
import React, {forwardRef} from "react";
import CustomSelectItem from "../../../../components/custom-select-item";
import {Menu, Select} from "@mantine/core";
import Label = Menu.Label;
import {useController} from "react-hook-form";



const PaymentModeSelect = (props:any) => {

    const {field} = useController(props)

    // @ts-ignore
    const data = Object.values(PaymentModeEnum)
        .map((value:PaymentModeEnum) => ({ value, label: value,imgUrl:PaymentModeAttributes[value].imgUrl }));

    interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
        value:PaymentModeEnum;
        imgUrl:string
    }

    const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
        ({ value,imgUrl, ...others }: ItemProps, ref) => (
            <div ref={ref} {...others}>
                <CustomSelectItem
                    imgUrl={imgUrl}
                    value={value}
                />
            </div>
        )
    );



    return (
        <>
            <Select
                {...field}
                itemComponent={SelectItem}
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