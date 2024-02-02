import { UseFormReturn } from "react-hook-form";
import { SplitBill, User } from "model";
import FormHelperEnum from "enum/form-helper.enum";
import SplitBillShare from "model/split-bill-share.model";
import { useCallback, useMemo } from "react";

export function useSplitLogic(props: UseFormReturn<SplitBill, any, undefined>) {
    function calculateDistribution(quantum: number, remaining: number): number {
        const distribution = quantum + (remaining-- > 0 ? 1 : 0);
        return distribution > 0 ? distribution : 0;
    }

    const { setError, setValue, reset, getValues, getFieldState } = props;

    const amount = getValues("amount");

    function handleAmountOnChange(e: string | number, index: number) {
        setValue(`splitBillShareList.${index}.amount`, parseInt(e.toString()), {
            shouldTouch: true,
        });
        setValue(`splitBillShareList.${index}.algo`, FormHelperEnum.MANUAL);
        split();
    }

    function handleChecked(checked: boolean, index: number, member: User) {
        if (checked) {
            setValue(
                `splitBillShareList.${index}.algo`,
                FormHelperEnum.CHECKED,
                {
                    shouldTouch: true,
                },
            );
            reset(undefined, { keepValues: true, keepTouched: true });
        } else {
            setValue(`splitBillShareList.${index}.amount`, 0, {
                shouldTouch: true,
            });
            setValue(
                `splitBillShareList.${index}.algo`,
                FormHelperEnum.UNCHECKED,
                {
                    shouldTouch: true,
                },
            );
        }
        split();
    }

    function getTouchedByIndex(index: number) {
        const fieldState = getFieldState(`splitBillShareList.${index}`);
        const isTouched = fieldState.isTouched;
        const isManual =
            getValues(`splitBillShareList.${index}.algo`) ===
            FormHelperEnum.MANUAL;
        const isUnchecked =
            getValues(`splitBillShareList.${index}.algo`) ===
            FormHelperEnum.UNCHECKED;
        const isChecked =
            getValues(`splitBillShareList.${index}.algo`) !==
            FormHelperEnum.CHECKED;

        return (isTouched || isManual || isUnchecked) && isChecked;
    }

    function checkForErrors(touchedAmount:number,touchedCount:number,totalAmount:number,totalCount:number){
        if(touchedCount == totalCount){
            if(touchedAmount > totalAmount){
                setError(`splitBillShareList`,{message:`Split amount exceeded Bill amount by ${touchedAmount - totalAmount}`})
            } else if (touchedAmount < totalAmount){
                setError(`splitBillShareList`,{message:`Remaining amount by ${totalAmount - touchedAmount}`})
            }
        } else {
            if(touchedAmount > totalAmount) {
                setError(`splitBillShareList`,{message:`Split amount exceeded Bill amount by ${touchedAmount - totalAmount}`})
            } else {
                setError(`splitBillShareList`,{message:""})
            }
        }
    }

    function split() {
        function calculateDistribution(): number {
            const distribution = quantum + (remaining-- > 0 ? 1 : 0);
            return distribution > 0 ? distribution : 0;
        }
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

        const amount = getValues("amount");
        const touchedAmount = getValues(`splitBillShareList`).reduce(
            calculateTouchedAmount,
            0,
        );
        const quantum = Math.floor(
            (amount - touchedAmount) / untouchedMemberCount,
        );
        let remaining = amount - touchedAmount - untouchedMemberCount * quantum;

        const distributeMoneyforUntouched = (
            value: SplitBillShare,
            index: number,
        ) => {
            if (!getTouchedByIndex(index)) {
                setValue(
                    `splitBillShareList.${index}.amount`,
                    calculateDistribution(),
                );
            }
        };

        getValues(`splitBillShareList`).forEach(distributeMoneyforUntouched);

        checkForErrors(touchedAmount,touchedMemberCount,amount,getValues(`splitBillShareList`).length)
    }

    return {
        split,
        handleAmountOnChange,
        handleChecked,
    };
}
