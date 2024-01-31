import FormEssentials from "forms/hooks/form-essentials";
import { SplitBillGroup } from "model";
import { useFormErrorsTranslations } from "locales/translation-hooks";
import SplitBill, { useSplitBillSchema } from "model/split-bill.model";
import { SplitAlgo } from "enum";

export const useBillFormEssentials = ():FormEssentials<SplitBillGroup> => {
    const {formErrors} = useFormErrorsTranslations();

    const schema = useSplitBillSchema();

    const defaultValues:Partial<SplitBill>={
        amount:0,
        date:new Date(),
        splitAlgo:SplitAlgo.EQUAL,
    }

    const emptyValues:Partial<SplitBillGroup>= defaultValues;

    return {
        schema,
        defaultValues,
        emptyValues
    }
}