import { SplitAlgo } from "enum";
import User, { useUserSchema } from "model/user.model";
import SplitBillShare, { useSplitBillShareSchema } from "model/split-bill-share.model";
import { useSplitBillGroupMemberSchema } from "model/split-bill-group-member.model";
import { z } from "zod";
import SplitBillGroup from "model/split-bill-group.model";

class SplitBill {
    id:number;
    bill:string;
    amount:number;
    splitAlgo:SplitAlgo;
    date:Date;
    paidBy:User;
    createdBy:User;
    createdAt:Date;
    modifiedAt:Date;
    splitBillShareList:SplitBillShare[];

    static deserialise(object:SplitBill):SplitBill{
        object.date = new Date((object.date as unknown as number) * 1000);
        object.createdAt = new Date((object.createdAt as unknown as number) * 1000);
        object.modifiedAt = new Date((object.modifiedAt as unknown as number) * 1000);

        return Object.assign(new SplitBill(),object);
    }
}

export const useSplitBillSchema = () => {

    // @ts-ignore
    return z.object<SplitBillGroup>({
        id:z.number().optional(),
        bill:z.string().min(3),
        amount:z.number().min(1),
        splitAlgo:z.nativeEnum(SplitAlgo),
        date:z.date(),
        paidBy:useUserSchema(),
        splitBillShareList:z.array(useSplitBillShareSchema()),
    });
};
export default SplitBill;