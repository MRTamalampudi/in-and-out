import { SplitBillGroup, User } from "model";
import { BaseService } from "service/base.service";
import { URL_CONSTANTS } from "constants/url-constants";

export class SplitBillGroupService extends BaseService<SplitBillGroup> {
    public BaseURL: string = URL_CONSTANTS.SPLIT_BILL_GROUP;
    private static instance: SplitBillGroupService;

    private constructor() {
        super(URL_CONSTANTS.SPLIT_BILL_GROUP, (entity) =>
            entity.memberList.forEach(
                (member) => (member.member = User.deserialise(member.member)),
            ),
        );
    }

    public static getInstance(): SplitBillGroupService {
        if (!SplitBillGroupService.instance) {
            SplitBillGroupService.instance = new SplitBillGroupService();
        }

        return SplitBillGroupService.instance;
    }
}
