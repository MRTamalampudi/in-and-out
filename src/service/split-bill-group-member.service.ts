import { BaseService } from "service/base.service";
import SplitBillGroupMember from "model/split-bill-group-member.model";
import { URL_CONSTANTS } from "constants/url.constants";
import { User } from "model";
import Page from "model/page";

export class SplitBillGroupMemberService extends BaseService<SplitBillGroupMember> {
    private static instance: SplitBillGroupMemberService;
    private constructor() {
        super(URL_CONSTANTS.SPLIT_BILL_GROUP_MEMBERS, (entity) => {
            entity.member = User.deserialise(entity.member);
            return entity;
        });
    }

    public static getInstance(): SplitBillGroupMemberService {
        if (!SplitBillGroupMemberService.instance) {
            SplitBillGroupMemberService.instance =
                new SplitBillGroupMemberService();
        }
        return SplitBillGroupMemberService.instance;
    }

    index(params: Record<string, any>): Promise<Page<SplitBillGroupMember>> {
        const name = params["q"];
        name && (params["q"] = `name~${name}`);
        return super.index(params);
    }
}