import { BaseService } from "service/base.service";
import { SplitBill, SplitBillGroup, User } from "model";
import { URL_CONSTANTS } from "constants/url.constants";

export class SplitBillService extends BaseService<SplitBill> {
    public BaseURL: string = URL_CONSTANTS.SPLIT_BILL;
    private static instance: SplitBillService;

    private constructor() {
        super(URL_CONSTANTS.SPLIT_BILL, (entity) => {
            entity.paidBy = User.deserialise(entity.paidBy)
            entity = SplitBill.deserialise(entity);
        });
    }

    public static getInstance(): SplitBillService {
        if (!SplitBillService.instance) {
            SplitBillService.instance = new SplitBillService();
        }

        return SplitBillService.instance;
    }
}