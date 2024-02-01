import { UseFormReturn } from "react-hook-form/dist/types";
import { SplitAlgo } from "enum";
import { SplitBill, User } from "model";
import SplitBillShare from "model/split-bill-share.model";



export function useSplitLogic(props: UseFormReturn<SplitBill, any, undefined>) {

    const { getValues, getFieldState, formState, setValue } = props;
    function getAmountByIndex(index: number) {
        return getValues(`splitBillShareList.${index}.amount`);
    }

    function getTouchedByIndex(index: number) {
        const isTouched = getFieldState(
            `splitBillShareList.${index}`,
        ).isTouched;
        const isWeighted =
            getValues(`splitBillShareList.${index}.algo`) == SplitAlgo.WEIGHTED;
        const isAmountValue37 = getAmountByIndex(index) != -37;
        return (isTouched || isWeighted) && isAmountValue37;
    }


    function split() {
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
                    quantum + (remaining-- > 0 ? 1 : 0),
                );
            }
        };

        getValues(`splitBillShareList`).forEach(distributeMoneyforUntouched);

        console.log(formState);
    }

    function handleAmountChange(e: string | number, index: number) {
        setValue(`splitBillShareList.${index}.amount`, parseInt(e.toString()), {
            shouldTouch: true,
        });
        setValue(`splitBillShareList.${index}.algo`, SplitAlgo.WEIGHTED)
        setTimeout(()=>split(),10)
    }

    function handleCheckBoxChange(checked: boolean, index: number, member: User) {
        if (checked) {
            setValue(`splitBillShareList.${index}.amount`, -37, {
                shouldTouch: true,
            });
        } else {
            setValue(`splitBillShareList.${index}.amount`, 0, {
                shouldTouch: true,
            });
        }
        setTimeout(()=>split(),10)
    }



    return { split, handleAmountChange, handleCheckBoxChange };
}
