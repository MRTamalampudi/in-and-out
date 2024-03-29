import User, { useUserSchema } from "model/user.model";
import SplitBill from "model/split-bill.model";
import SplitBillStatus from "enum/split-bill-status.enum";
import { z } from "zod";
import FormHelperEnum from "enum/form-helper.enum";

class SplitBillShare {
    id: number;
    bill: SplitBill;
    amount: number;
    user:User;
    status:SplitBillStatus;
    algo:FormHelperEnum;
    userId:number;

    static deserialize(object:SplitBillShare):SplitBillShare{
        object.algo = object.amount > 0 ? FormHelperEnum.MANUAL : FormHelperEnum.UNCHECKED;
        object.user = User.deserialise(object.user);
        if(object.bill) {
            object.bill = SplitBill.deserialise(object.bill);
        }
        return Object.assign(new SplitBillShare(),object);
    }

    static serialise(share:SplitBillShare):SplitBillShare{
        share.userId = share.user.id;

        //@ts-ignore
        share.user = null;

        return share;
    }
}

export const useSplitBillShareSchema = () => {
    return z.object({
        id: z.number().optional(),
        amount: z.number().min(0),
        user:useUserSchema(),
        status:z.nativeEnum(SplitBillStatus).default(SplitBillStatus.PENDING).optional(),
    })
}

export default SplitBillShare;