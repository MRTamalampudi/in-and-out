import SplitBillGroup from "model/split-bill-group.model";
import User from "model/user.model";

class SplitBillGroupMember {
    id: number;
    oweShare: number;
    lentShare: number;
    group: SplitBillGroup;
    user: User;
}

export default SplitBillGroupMember;