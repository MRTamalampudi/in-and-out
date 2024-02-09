import SplitBillGroupMember, {
    useSplitBillGroupMemberSchema,
} from "model/split-bill-group-member.model";
import { z } from "zod";
import User from "model/user.model";

class SplitBillGroup {
    id: number;
    name: string;
    memberList: SplitBillGroupMember[];

    getCurrentLoggedInGroupMember(user: User):SplitBillGroupMember {
        const findMember = (member: SplitBillGroupMember) => {
            return member.member.id === user.id;
        };
        return this.memberList.find(findMember)!;
    }

    static deserialize(entity:SplitBillGroup):SplitBillGroup{
        return Object.assign(new SplitBillGroup(),entity)
    }
}

export const useSplitBillGroupSchema = () => {
    const splitBillGroupMemberSchema = useSplitBillGroupMemberSchema();

    // @ts-ignore
    return z.object<SplitBillGroup>({
        id: z.number().optional(),
        name: z.string().min(3, { message: "messages.name" }),
        memberList: z.array(splitBillGroupMemberSchema),
    });
};

export default SplitBillGroup;
