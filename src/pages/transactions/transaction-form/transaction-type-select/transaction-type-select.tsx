import React, {FC, forwardRef} from 'react';
import styles from './transaction-type-select.module.scss';
import {TransactionTypeEnum} from "../../../../enums";
import {TransactionTypeBadge} from "../../../../components";
import {Select} from "@mantine/core";
import {InputProps} from "../input-props";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";

const TransactionTypeSelect = <T extends FieldValues>(props:InputProps<T>) => {

    const {label,placeholder} = props;
    const {field,formState} = useController<T>(props);
    type optionsType = { value: TransactionTypeEnum; label: TransactionTypeEnum };

    //@ts-ignore
    const data: optionsType[] = Object.values(TransactionTypeEnum)
        .filter(
            (value:TransactionTypeEnum):boolean => value !== TransactionTypeEnum.BALANCE
        ).map(
            (value:TransactionTypeEnum):optionsType => ({ value, label: value })
        );

    interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
        value:TransactionTypeEnum;
    }

    const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
        ({ value, ...others }: ItemProps, ref) => (
            <div
                ref={ref}
                {...others}
            >
                <TransactionTypeBadge
                    type={value}
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
                label={label}
                placeholder={placeholder}
            />
        </>
    )
}

export default TransactionTypeSelect;
