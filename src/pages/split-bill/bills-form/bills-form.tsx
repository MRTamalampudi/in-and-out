import styles from "./bills-form.module.scss";
import { TextInputForm } from "forms/inputs";
import { useFieldArray, useForm } from "react-hook-form";
import ModalWrapper from "components/modal";
import { useSearchParams } from "react-router-dom";
import { Dropzone } from "@mantine/dropzone";
import Paperclip from "components/icons/paperclip";
import React, { useEffect, useState } from "react";
import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import { useIndexGroupMembers } from "service/react-query-hooks/split_bill_group_member.query";
import { TableWrapper } from "components/table";
import { Button, Checkbox, NumberInput } from "@mantine/core";
import Table from "components/table/table";
import { SplitBill } from "model";
import PaidBy from "pages/split-bill/bills-form/paid-by";
import DateTimeInputForm from "forms/inputs/date-time-input-form";
import SplitAlgoSelect from "pages/split-bill/bills-form/split-algo-select";
import { useBillFormEssentials } from "forms/hooks/bill-form.essentials";
import { zodResolver } from "@hookform/resolvers/zod";
import FormHelperEnum from "enum/form-helper.enum";
import { useSplitLogic } from "pages/split-bill/bills-form/split-logic";
import NumberInputForm from "forms/inputs/number-input-form";
import SplitBillStatus from "enum/split-bill-status.enum";

type BillsFormProps = {};
const BillsForm = ({}: BillsFormProps) => {
    const [searchParams, setSearchParams] = useSearchParams();

    function handleOnClose() {
        searchParams.delete("newBill");
        setSearchParams(searchParams);
    }

    return (
        <ModalWrapper
            opened={!!searchParams.get("newBill")}
            onClose={handleOnClose}
            title={"Add Bill"}
            size={"50rem"}
        >
            <BillsFormPresentation />
        </ModalWrapper>
    );
};

const BillsFormPresentation = () => {
    const { schema, defaultValues } = useBillFormEssentials();

    const formProps = useForm<SplitBill>({
        mode: "onSubmit",
        defaultValues,
        resolver: zodResolver(schema),
    });

    const {
        formState,
        watch,
        setValue,
        control,
        handleSubmit,
        getValues,
        getFieldState,
    } = formProps;

    const {handleAmountOnChange,handleChecked,split} = useSplitLogic(formProps);

    useFieldArray({
        control,
        name: "splitBillShareList",
    });

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
        { id: "group", value: "1" },
    ]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState({});
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 1,
        pageSize: 20,
    });

    const { data } = useIndexGroupMembers(pagination, columnFilters, sorting);

    function handleOnchange(e: string | number, index: number) {
        setValue(`splitBillShareList.${index}.amount`, parseInt(e.toString()), {
            shouldTouch: true,
        });
        setValue(`splitBillShareList.${index}.algo`, FormHelperEnum.MANUAL)
        split();
    }

    watch("splitBillShareList");
    watch("amount");
    watch("paidBy");

    useEffect(() => {
        data?.content.forEach((member, index) => {
            setValue(
                `splitBillShareList.${index}.amount`,
                getValues("amount") / data?.numberOfElements,
            );
            setValue(`splitBillShareList.${index}.user`, member.member);
        });
        split();
    }, [getValues("amount")]);

    useEffect(() => {
        data?.content.forEach((member,index)=>{
            setValue(`splitBillShareList.${index}.status`,getValues(`paidBy.id`)==member.member.id ? SplitBillStatus.PAID : SplitBillStatus.PENDING)
        })
    }, [getValues(`paidBy.id`)]);


    function handleSubmit_(data:SplitBill) {
        console.log(data)
    }


    return (
        <div className={styles.BillsForm}>
            <div className={styles.body}>
                <div className={styles.left}>
                    <NumberInputForm
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
                    <div className={"flex-row column-gap-8 flex-basis-equal"}>
                        <DateTimeInputForm
                            name={"date"}
                            control={control}
                            label={"Paid on"}
                            placeholder={"select paid date"}
                        />
                        <SplitAlgoSelect
                            name={"splitAlgo"}
                            control={control}
                            label={"Split type"}
                            placeholder={"select split type"}
                        />
                    </div>
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
                        {
                            formState.errors.splitBillShareList && <span className={"subtitle error-text"}>{formState.errors.splitBillShareList.message}</span>
                        }
                    </div>
                    <TableWrapper
                        compact={true}
                        borders={false}
                        rowBorders={false}
                    >
                        <Table>
                            <Table.Body>
                                {data?.content.map((member, index) => {
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
                                                            index,
                                                            member.member,
                                                        )
                                                    }
                                                    defaultChecked={true}
                                                />
                                            </td>
                                            <td className={"flex-basis-10/20"}>
                                                {member.member.getFullName()}
                                            </td>
                                            <td>
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
