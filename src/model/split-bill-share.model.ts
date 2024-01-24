import User from "model/user.model";
import SplitBill from "model/split-bill.model";
import SplitBillStatus from "enum/split-bill-status.enum";

class SplitBillShare {
    id: number;
    bill: SplitBill;
    amount: number;
    user:User;
    status:SplitBillStatus;
}

export default SplitBillShare;