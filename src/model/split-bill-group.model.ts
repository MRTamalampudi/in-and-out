import SplitBillGroupMember from "model/split-bill-group-member.model";

class SplitBillGroup {
    id: number;
    name: string;
    memberList: SplitBillGroupMember[];
}

export default SplitBillGroup;