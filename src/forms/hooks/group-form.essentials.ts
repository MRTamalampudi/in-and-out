import FormEssentials from "forms/hooks/form-essentials";
import { SplitBillGroup } from "model";
import { useFormErrorsTranslations } from "locales/translation-hooks";
import { useSplitBillGroupSchema } from "model/split-bill-group.model";

export const useGroupFormEssentials = ():FormEssentials<SplitBillGroup> => {
    const {formErrors} = useFormErrorsTranslations();

    const schema = useSplitBillGroupSchema();

    const defaultValues:Partial<SplitBillGroup>={
        name:"",
    }

    const emptyValues:Partial<SplitBillGroup>= defaultValues;

    return {
        schema,
        defaultValues,
        emptyValues
    }
}