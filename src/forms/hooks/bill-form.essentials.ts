import FormEssentials from "forms/hooks/form-essentials";
import { SplitBillGroup } from "model";
import { useFormErrorsTranslations } from "locales/translation-hooks";
import SplitBill, { useSplitBillSchema } from "model/split-bill.model";
import { SplitAlgo } from "enum";
import { useGetUser } from "service/react-query-hooks/user.query";
import { useQueryClient } from "@tanstack/react-query";
import { SplitBillGroupQueryKeys } from "service/react-query-hooks/query-keys";
import { splitBillRoute } from "pages/split-bill/routes";
import { useGetSplitBillGroup } from "service/react-query-hooks/split-bill-group.query";

export const useBillFormEssentials = ():FormEssentials<SplitBillGroup> => {
    const {formErrors} = useFormErrorsTranslations();

    const schema = useSplitBillSchema();
    const data = useGetUser();
    const qc = useQueryClient();

    const {group:groupId} = splitBillRoute.useSearch();
    const {data:group} = useGetSplitBillGroup(groupId || 0);

    const defaultValues:Partial<SplitBill>={
        amount:0,
        date:new Date(),
        paidBy: data.data,
        group: group
    }

    const emptyValues:Partial<SplitBill>= defaultValues;

    return {
        schema,
        defaultValues,
        emptyValues
    }
}