import FormEssentials from "forms/hooks/form-essentials";
import { SplitBillGroup } from "model";
import { useFormErrorsTranslations } from "locales/translation-hooks";
import SplitBill, { useSplitBillSchema } from "model/split-bill.model";
import { SplitAlgo } from "enum";
import { useGetUser } from "service/react-query-hooks/user.query";

export const useBillFormEssentials = ():FormEssentials<SplitBillGroup> => {
    const {formErrors} = useFormErrorsTranslations();

    const schema = useSplitBillSchema();
    const data = useGetUser();

    const defaultValues:Partial<SplitBill>={
        amount:0,
        date:new Date(),
        paidBy: data.data,
    }

    const emptyValues:Partial<SplitBill>= defaultValues;

    return {
        schema,
        defaultValues,
        emptyValues
    }
}