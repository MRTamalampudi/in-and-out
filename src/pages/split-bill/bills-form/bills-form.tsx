import styles from "./bills-form.module.scss";
import { TextInputForm } from "forms/inputs";
import { useFieldArray, useForm } from "react-hook-form";
import ModalWrapper from "components/modal";
import { Dropzone } from "@mantine/dropzone";
import Paperclip from "components/icons/paperclip";
import React, { useEffect } from "react";
import { TableWrapper } from "components/table";
import { Button, Checkbox, NumberInput, Select } from "@mantine/core";
import Table from "components/table/table";
import { SplitBill, User } from "model";
import PaidBy from "pages/split-bill/bills-form/paid-by";
import DateTimeInputForm from "forms/inputs/date-time-input-form";
import { useBillFormEssentials } from "forms/hooks/bill-form.essentials";
import { zodResolver } from "@hookform/resolvers/zod";
import FormHelperEnum from "enum/form-helper.enum";
import { useSplitLogic } from "pages/split-bill/bills-form/split-logic";
import NumberInputForm from "forms/inputs/number-input-form";
import {
    useCreateSplitBill,
    useGetSplitBill, useUpdateSplitBill
} from "service/react-query-hooks/split-bill.query";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import { splitBillRoute } from "pages/split-bill/routes";
import { useGetSplitBillGroup } from "service/react-query-hooks/split-bill-group.query";
import SplitBillStatus from "enum/split-bill-status.enum";
import SplitBillGroupMember from "model/split-bill-group-member.model";
import SplitBillShare from "model/split-bill-share.model";
import AmountInputForm from "forms/inputs/amount-input-form/amount-input-form";
import { StatusSelect } from "pages/split-bill/bills-form/status-select";

type BillsFormProps = {};
const BillsForm = ({}: BillsFormProps) => {
    const navigate = useNavigate({from:splitBillRoute.fullPath})

    function handleOnClose() {
        navigate({ search: ({ bill,...prev }) => ({ ...prev, newBill: false }) });
    }

    const {newBill,group:groupId,bill} = splitBillRoute.useSearch();
    const {data,isLoading,isFetching} = useGetSplitBill(bill!);
    const {data:group} = useGetSplitBillGroup(groupId || 0);
    
    group?.memberList.forEach(member=>{
        let pass = false;
        data?.splitBillShareList.forEach(share=>{
            share.user.id == member.member.id && (pass=true)
        })
        if(!pass){
            const splitBillShare = new SplitBillShare();
            splitBillShare.user = member.member;
            splitBillShare.algo = FormHelperEnum.UNCHECKED;
            splitBillShare.amount = 0;
            data?.splitBillShareList.push(splitBillShare)
        }
    })

    return (
        <ModalWrapper
            opened={newBill || (!!bill && !isLoading)}
            onClose={handleOnClose}
            title={"Add Bill"}
            size={"55rem"}
        >
            {(newBill || (bill && !isLoading)) && <BillsFormPresentation splitBill={data||undefined}/>}
        </ModalWrapper>
    );
};

const BillsFormPresentation = ({splitBill}:{splitBill?:SplitBill}) => {
    const { schema, defaultValues } = useBillFormEssentials();
    const navigate = useNavigate();
    const {group} = splitBillRoute.useSearch()
    const mutation = useCreateSplitBill({
        onSuccess: () => {
            navigate({search:(prev)=>({...prev,newBill:false})})
            toast.success("successfully created bill");
        },
    });
    const updateMutation = useUpdateSplitBill({
        onSuccess: () => {
            navigate({search:(prev)=>({...prev,newBill:false})})
            toast.success("successfully updated bill");
        },
    });
    const formProps = useForm<SplitBill>({
        mode: "onSubmit",
        defaultValues: splitBill || defaultValues,
        resolver: zodResolver(schema),
    });

    const {
        formState,
        watch,
        setValue,
        control,
        handleSubmit,
        getValues,
    } = formProps;

    const {handleAmountOnChange,handleStatusChange,handleChecked,split} = useSplitLogic(formProps);

    useFieldArray({
        control,
        name: "splitBillShareList",
    });

    const { data } = useGetSplitBillGroup(group || 0);

    watch("splitBillShareList");
    watch("amount");
    watch("paidBy");

    useEffect(() => {
        console.log("sppltubbill",splitBill)
        if(!splitBill){
            data?.memberList.forEach((member, index) => {
                if(!getValues(`splitBillShareList.${index}.user`)){
                    setValue(
                        `splitBillShareList.${index}.amount`,
                        getValues("amount") / data?.memberList.length,
                    );
                    setValue(`splitBillShareList.${index}.user`, member.member);
                }
            });
        }
        split();
    }, [getValues("amount")]);


    function handleSubmit_(data:SplitBill) {
        splitBill ? updateMutation.mutate(data) : mutation.mutate(data)
    }

    function getStatusValues(index:number,member:User) {
        return getValues(`splitBillShareList.${index}.status`) || (member.id == getValues("paidBy").id ? SplitBillStatus.PAID : SplitBillStatus.PENDING)
    }

    console.log(formState)
    console.log(getValues("splitBillShareList"))
    
    function renderSplitBill() {
        return splitBill?.splitBillShareList.map((share,index) => (
            <tr
                key={index}
                data-disabled={
                    getValues(`splitBillShareList.${index}.algo`) ==
                    FormHelperEnum.UNCHECKED
                }
            >
                <td>
                    <Checkbox
                        onChange={(event) =>
                            handleChecked(
                                event.currentTarget.checked,
                                index
                            )
                        }
                        defaultChecked={getValues(`splitBillShareList.${index}.algo`) != FormHelperEnum.UNCHECKED}
                    />
                </td>
                <td className={"flex-basis-7/20"}>
                    {share.user.getFullName()}
                </td>
                <td className={"flex-basis-8/20"}>
                    <StatusSelect formProps={formProps} index={index} member={share.user} />
                </td>
                <td className={"flex-basis-5/20"}>
                    <NumberInput
                        hideControls
                        value={getValues(`splitBillShareList.${index}.amount`)}
                        onChange={(e) => handleAmountOnChange(e, index)}
                        disabled={
                            getValues(`splitBillShareList.${index}.algo`) ==
                            FormHelperEnum.UNCHECKED
                        }
                        leftSection={<span className={"f-13"}>₹</span>}
                        defaultValue={0}
                    />
                </td>
            </tr>
        ));
    }

    return (
        <div className={styles.BillsForm}>
            <div className={styles.body}>
                <div className={styles.left}>
                    <AmountInputForm
                        name={"amount"}
                        control={control}
                        label={"Amount"}
                        placeholder={"enter amount"}
                    />
                    <TextInputForm
                        name={"bill"}
                        control={control}
                        label={"Bill"}
                        placeholder={"enter bill"}
                    />
                    <PaidBy
                        name={"paidBy"}
                        control={control}
                        label={"Paid by"}
                        placeholder={"select paid by"}
                    />
                    <DateTimeInputForm
                        name={"date"}
                        control={control}
                        label={"Paid on"}
                        placeholder={"select paid date"}
                    />
                    <div className={styles.dropzone}>
                        <Dropzone onDrop={() => console.log("drop")}>
                            <Paperclip width={64} height={64} />
                            <span>Drop the bills</span>
                        </Dropzone>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={"flex-row jc-space-between"}>
                        <span className={"subtitle"}>Members</span>
                        {formState.errors.splitBillShareList && (
                            <span className={"subtitle error-text"}>
                                {formState.errors.splitBillShareList.message}
                            </span>
                        )}
                    </div>
                    <TableWrapper
                        compact={true}
                        borders={false}
                        rowBorders={false}
                    >
                        <Table>
                            <Table.Body>
                                {splitBill ? renderSplitBill() : data?.memberList.map((member, index) => {
                                    return (
                                        <tr
                                            key={index}
                                            data-disabled={
                                                getValues(
                                                    `splitBillShareList.${index}.algo`,
                                                ) == FormHelperEnum.UNCHECKED
                                            }
                                        >
                                            <td>
                                                <Checkbox
                                                    onChange={(event) =>
                                                        handleChecked(
                                                            event.currentTarget
                                                                .checked,
                                                            index
                                                        )
                                                    }
                                                    defaultChecked={true}
                                                />
                                            </td>
                                            <td className={"flex-basis-7/20"}>
                                                {member.member.getFullName()}
                                            </td>
                                            <td className={"flex-basis-8/20"}>
                                                <StatusSelect formProps={formProps} index={index} member={member.member} />
                                            </td>
                                            <td className={"flex-basis-5/20"}>
                                                <NumberInput
                                                    hideControls
                                                    value={getValues(
                                                        `splitBillShareList.${index}.amount`,
                                                    )}
                                                    onChange={(e) =>
                                                        handleAmountOnChange(
                                                            e,
                                                            index,
                                                        )
                                                    }
                                                    disabled={
                                                        getValues(
                                                            `splitBillShareList.${index}.algo`,
                                                        ) ==
                                                        FormHelperEnum.UNCHECKED
                                                    }
                                                    leftSection={
                                                        <span
                                                            className={"f-13"}
                                                        >
                                                            ₹
                                                        </span>
                                                    }
                                                    defaultValue={0}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </Table.Body>
                        </Table>
                    </TableWrapper>
                </div>
            </div>
            <div className={"footer"}>
                <Button size={"compact-sm"} variant={"outline"}>
                    Clear all
                </Button>
                <Button
                    size={"compact-sm"}
                    type={"submit"}
                    onClick={handleSubmit(handleSubmit_)}
                >
                    {getValues("id") ? "Update" : "Add"}
                </Button>
            </div>
        </div>
    );
};

export default BillsForm;
