import { BaseService } from "service/base.service";
import SplitBillGroupMember from "model/split-bill-group-member.model";
import { URL_CONSTANTS } from "constants/url-constants";
import * as process from "process";
import { User } from "model";

export class SplitBillGroupMemberService extends BaseService<SplitBillGroupMember> {
    private static instance:SplitBillGroupMemberService;
    private constructor() {
        super(URL_CONSTANTS.SPLIT_BILL_GROUP_MEMBERS, (entity) => {
            entity.member = User.deserialise(entity.member);
        });
    }

    public static getInstance():SplitBillGroupMemberService{
        if(!SplitBillGroupMemberService.instance){
            SplitBillGroupMemberService.instance = new SplitBillGroupMemberService();
        }
        return SplitBillGroupMemberService.instance;
    }
}