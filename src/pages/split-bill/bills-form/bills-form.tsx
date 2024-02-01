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
import { SplitBill, User } from "model";
import PaidBy from "pages/split-bill/bills-form/transactee-select";
import DateTimeInputForm from "forms/inputs/date-time-input-form";
import SplitAlgoSelect from "pages/split-bill/bills-form/split-algo-select";
import { useBillFormEssentials } from "forms/hooks/bill-form.essentials";
import { zodResolver } from "@hookform/resolvers/zod";
import SplitBillShare from "model/split-bill-share.model";
import { SplitAlgo } from "enum";

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

    const {
        formState,
        watch,
        setValue,
        control,
        handleSubmit,
        reset,
        getValues,
        getFieldState,
        resetField,
    } = useForm<SplitBill>({
        mode: "onSubmit",
        defaultValues,
        resolver: zodResolver(schema),
    });

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

    function handleOnchange(e: string | number, index: number) {
        setValue(`splitBillShareList.${index}.amount`, parseInt(e.toString()), {
            shouldTouch: true,
        });
        setValue(`splitBillShareList.${index}.algo`, SplitAlgo.WEIGHTED)
        split();
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
        split();
    }, [getValues("amount")]);

    console.log(getValues(`splitBillShareList`));

    function handleChecked(checked: boolean, index: number, member: User) {
        if (checked) {
            setValue(`splitBillShareList.${index}.amount`, -37, {
                shouldTouch: true,
            });
            reset(undefined,{keepValues:true})
        } else {
            setValue(`splitBillShareList.${index}.amount`, 0, {
                shouldTouch: true,
            });
        }
        split();
    }

    function getAmountByIndex(index: number) {
        return getValues(`splitBillShareList.${index}.amount`);
    }

    function getTouchedByIndex(index: number) {
        console.log(
            "touched",getFieldState(`splitBillShareList.${index}`).isTouched,
            "37", getAmountByIndex(index) != -37 ,
            "algo", getValues(`splitBillShareList.${index}.algo`) == SplitAlgo.WEIGHTED,
            index
        )
        return (
            (getFieldState(`splitBillShareList.${index}`).isTouched ||
            (getValues(`splitBillShareList.${index}.algo`)==SplitAlgo.WEIGHTED))  && getAmountByIndex(index)!=37

        );
    }

    function split() {
        console.log(getValues(`splitBillShareList`));
        const calculateTouchedAmount = (
            acc: number,
            value: SplitBillShare,
            index: number,
        ) => {
            return getTouchedByIndex(index) ? acc + value.amount : acc;
        };

        const caluculateTouchedMember = (
            acc: number,
            value: SplitBillShare,
            index: number,
        ) => {
            return getTouchedByIndex(index) ? acc + 1 : acc;
        };

        const touchedMemberCount = getValues(`splitBillShareList`).reduce(
            caluculateTouchedMember,
            0,
        );
        const untouchedMemberCount =
            getValues(`splitBillShareList`).length - touchedMemberCount;

        console.log("touchedMemberCount ==> ", touchedMemberCount);
        console.log("untouchedMemberCount ==>", untouchedMemberCount);

        const amount = getValues("amount");
        console.log("amount===>", amount);
        const touchedAmount = getValues(`splitBillShareList`).reduce(
            calculateTouchedAmount,
            0,
        );
        console.log("touched amount ==>", touchedAmount);
        const quantum = Math.floor(
            (amount - touchedAmount) / untouchedMemberCount,
        );
        console.log("quantum ===>", quantum);
        let remaining = amount - touchedAmount - untouchedMemberCount * quantum;

        const distributeMoneyforUntouched = (
            value: SplitBillShare,
            index: number,
        ) => {
            if (!getTouchedByIndex(index)) {
                setValue(
                    `splitBillShareList.${index}.amount`,
                    quantum + (remaining-- > 0 ? 1 : 0),
                );
            }
        };

        getValues(`splitBillShareList`).forEach(distributeMoneyforUntouched);

        console.log(formState);
    }

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
                                                getFieldState(
                                                    `splitBillShareList.${index}`,
                                                ).isTouched &&
                                                getValues(
                                                    `splitBillShareList.${index}.amount`,
                                                ) == 0
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
                                                        handleOnchange(e, index)
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
