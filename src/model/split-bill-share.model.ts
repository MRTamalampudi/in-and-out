import User, { useUserSchema } from "model/user.model";
import SplitBill from "model/split-bill.model";
import SplitBillStatus from "enum/split-bill-status.enum";
import { z } from "zod";
import { SplitAlgo } from "enum";

class SplitBillShare {
    id: number;
    bill: SplitBill;
    amount: number;
    user:User;
    status:SplitBillStatus;
    algo:SplitAlgo;
}

export const useSplitBillShareSchema = () => {
    return z.object({
        id: z.number().optional(),
        amount: z.number().min(1),
        user:useUserSchema(),
        status:z.nativeEnum(SplitBillStatus),
        manual:z.boolean().optional().default(false)
    })
}

export default SplitBillShare;