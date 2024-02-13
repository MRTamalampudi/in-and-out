import { SplitBillGroup, User } from "model";
import { BaseService } from "service/base.service";
import { URL_CONSTANTS } from "constants/url.constants";
import SplitBillGroupMember from "model/split-bill-group-member.model";

export class SplitBillGroupService extends BaseService<SplitBillGroup> {
    public BaseURL: string = URL_CONSTANTS.SPLIT_BILL_GROUP;
    private static instance: SplitBillGroupService;

    private constructor() {
        super(URL_CONSTANTS.SPLIT_BILL_GROUP, (entity) => {
            const deserializeMember = (member: SplitBillGroupMember) =>
                (member.member = User.deserialise(member.member));
            entity.memberList.forEach(deserializeMember);
            return SplitBillGroup.deserialize(entity);
        });
    }

    public static getInstance(): SplitBillGroupService {
        if (!SplitBillGroupService.instance) {
            SplitBillGroupService.instance = new SplitBillGroupService();
        }

        return SplitBillGroupService.instance;
    }

    get(id: number): Promise<SplitBillGroup> {
        return super.get(id ?? 0);
    }
}
