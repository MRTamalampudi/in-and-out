import { BaseService } from "service/base.service";
import { URL_CONSTANTS } from "constants/url.constants";
import SplitBillShare from "model/split-bill-share.model";
import { SplitBill, User } from "model";

export class SplitBillShareService extends BaseService<SplitBillShare> {
    public BaseURL: string = URL_CONSTANTS.SPLIT_BILL_SHARE;
    private static instance: SplitBillShareService;

    private constructor() {
        super(URL_CONSTANTS.SPLIT_BILL_SHARE, (entity) => {
            entity.bill.paidBy = User.deserialise(entity.bill.paidBy);
            entity.user = User.deserialise(entity.user);
            entity.bill = SplitBill.deserialise(entity.bill)
        });
    }

    public static getInstance(): SplitBillShareService {
        if (!SplitBillShareService.instance) {
            SplitBillShareService.instance = new SplitBillShareService();
        }

        return SplitBillShareService.instance;
    }
}