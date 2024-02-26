import { UseFormReturn } from "react-hook-form";
import { SplitBill, User } from "model";
import SplitBillStatus from "enum/split-bill-status.enum";
import FormHelperEnum from "enum/form-helper.enum";
import { Select } from "@mantine/core";
import React from "react";
import { useSplitLogic } from "pages/split-bill/bills-form/split-logic";
import { useGetUser } from "service/react-query-hooks/user.query";


type StatusSelectProps = {
    formProps:UseFormReturn<SplitBill, any, undefined>,
    index:number,
    member:User
}

export function StatusSelect({formProps,index,member}:StatusSelectProps) {

    const {getValues} = formProps;
    const {handleStatusChange} = useSplitLogic(formProps);
    const {data:currentUser} = useGetUser();
    function getStatusValues(index: number, member: User) {
        return getValues(`splitBillShareList.${index}.status`) || (member.id == getValues("paidBy").id ? SplitBillStatus.PAID : SplitBillStatus.PENDING)
    }

    const data = Object.keys(SplitBillStatus).map(value => {
        if(value == SplitBillStatus.CLEARED){
            return {
                label:SplitBillStatus.CLEARED.toString(),
                value:SplitBillStatus.CLEARED.toString(),
                disabled: getValues(`paidBy.id`) !== currentUser?.id
            }
        } else {
            return {
                label:value as SplitBillStatus,
                value:value as SplitBillStatus,
                disabled: false,
            }
        }
    });

    return (
        <Select
            data={data}
            disabled={
                getValues(
                    `splitBillShareList.${index}.algo`,
                ) ==
                FormHelperEnum.UNCHECKED
            }
            value={getStatusValues(
                index,
                member,
            )}
            onChange={(e) =>
                handleStatusChange(
                    e || "PENDING",
                    index,
                )
            }
        />
    )
}