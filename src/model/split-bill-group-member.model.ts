import SplitBillGroup, {
    useSplitBillGroupSchema,
} from "model/split-bill-group.model";
import User, { userSchema } from "model/user.model";
import { z } from "zod";

class SplitBillGroupMember {
    id: number;
    oweShare: number;
    lentShare: number;
    group: SplitBillGroup;
    member: User;
}

// @ts-ignore
export const useSplitBillGroupMemberSchema = () => {
    // @ts-ignore
    return  z.object<SplitBillGroupMember>({
        id: z.number().optional(),
        oweShare: z.number().optional(),
        lentShare: z.number().optional(),
        member: userSchema(),
    });
};

export default SplitBillGroupMember;
