import SplitBillGroup from "model/split-bill-group.model";
import User from "model/user.model";

class SplitBillGroupMember {
    id: number;
    oweShare: number;
    lentShare: number;
    group: SplitBillGroup;
    member: User;
}

export default SplitBillGroupMember;