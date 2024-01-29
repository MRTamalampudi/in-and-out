import SplitBillGroupMember, { useSplitBillGroupMemberSchema } from "model/split-bill-group-member.model";
import { z } from "zod";

class SplitBillGroup {
    id: number;
    name: string;
    memberList: SplitBillGroupMember[];
}

export const useSplitBillGroupSchema = () => {

    const splitBillGroupMemberSchema = useSplitBillGroupMemberSchema();

    // @ts-ignore
    return z.object<SplitBillGroup>({
        id: z.number().optional(),
        name: z.string().min(3, { message: "messages.name" }),
        memberList: z.array(splitBillGroupMemberSchema)
    });
};

export default SplitBillGroup;
