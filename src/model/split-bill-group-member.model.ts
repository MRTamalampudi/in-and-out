import SplitBillGroup from "model/split-bill-group.model";
import User, { useUserSchema } from "model/user.model";
import { z } from "zod";
import { splitBillRoute } from "pages/split-bill/routes";
import { useGetSplitBillGroup } from "service/react-query-hooks/split-bill-group.query";

class SplitBillGroupMember {
    id: number;
    oweShare: number;
    lentShare: number;
    group: SplitBillGroup;
    groupId: number;
    member: User;
}

// @ts-ignore
export const useSplitBillGroupMemberSchema = () => {

    const {group} = splitBillRoute.useSearch();
    const {data} = useGetSplitBillGroup(group || 0);

    // @ts-ignore
    return  z.object<SplitBillGroupMember>({
        id: z.number().optional(),
        oweShare: z.number().optional(),
        lentShare: z.number().optional(),
        member: useUserSchema(),
        groupId: z.number().default(data?.id!),
    });
};

export default SplitBillGroupMember;
