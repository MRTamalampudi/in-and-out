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
import SplitBillGroupMember from "model/split-bill-group-member.model";
import { SplitBill } from "model";
import PaidBy from "pages/split-bill/bills-form/transactee-select";
import DateTimeInputForm from "forms/inputs/date-time-input-form";
import SplitAlgoSelect from "pages/split-bill/bills-form/split-algo-select";
import { useSplitBillSchema } from "model/split-bill.model";
import { useBillFormEssentials } from "forms/hooks/bill-form.essentials";
import { zodResolver } from "@hookform/resolvers/zod";

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

    const {schema,defaultValues} = useBillFormEssentials();

    const {
        formState,
        watch,
        setValue,
        control,
        handleSubmit,
        reset,
        getValues,
    } = useForm<SplitBill>({
        mode: "onSubmit",
        defaultValues,
        resolver:zodResolver(schema)
    })

    const { remove, append, update, replace } = useFieldArray({
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

    function handleOnchange(
        e: string | number,
        index: number,
        member: SplitBillGroupMember,
    ) {
        setValue(`splitBillShareList.${index}.amount`, parseInt(e.toString()));
        setValue(`splitBillShareList.${index}.user`, member.member);
    }

    watch("splitBillShareList");
    watch("amount");

    useEffect(() => {
        data?.content.forEach((member, index) => {
            setValue(
                `splitBillShareList.${index}.amount`,
                getValues("amount") / data?.numberOfElements,
            );
            setValue(`splitBillShareList.${index}.user`, member.member);
        });
    }, [getValues("amount")]);



    console.log(formState.touchedFields);

    return (
        <div className={styles.BillsForm}>
            <div className={styles.body}>
                <div className={styles.left}>
                    <TextInputForm
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
                                                !getValues(
                                                    `splitBillShareList.${index}`,
                                                )
                                            }
                                        >
                                            <td>
                                                <Checkbox checked={!!getValues(
                                                    `splitBillShareList.${index}.amount`,
                                                )}/>
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
                                                        handleOnchange(
                                                            e,
                                                            index,
                                                            member,
                                                        )
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
                    onClick={handleSubmit((data) => console.log(data))}
                >
                    {getValues("id") ? "Update" : "Add"}
                </Button>
            </div>
        </div>
    );
};

export default BillsForm;
