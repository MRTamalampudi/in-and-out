import { BaseService } from "service/base.service";
import { SplitBill } from "model";
import { URL_CONSTANTS } from "constants/url.constants";
import SplitBillShare from "model/split-bill-share.model";
import SplitBillStatus from "enum/split-bill-status.enum";

export class SplitBillService extends BaseService<SplitBill> {
    public BaseURL: string = URL_CONSTANTS.SPLIT_BILL;
    private static instance: SplitBillService;

    private constructor() {
        super(
            URL_CONSTANTS.SPLIT_BILL,
            (entity) => SplitBill.deserialise(entity),
            (entity) => {
                entity = SplitBill.serialise(entity);
            },
        );
    }

    public static getInstance(): SplitBillService {
        if (!SplitBillService.instance) {
            SplitBillService.instance = new SplitBillService();
        }

        return SplitBillService.instance;
    }

    create(entity: SplitBill): Promise<SplitBill> {
        const filterByShare = (share: SplitBillShare) => share.amount > 0;
        const updateSplitBillShareStatus = (share: SplitBillShare) => {
            if (share.user.id === entity.paidBy.id) {
                share.status = SplitBillStatus.PAID;
            } else if (!share.status) {
                share.status = SplitBillStatus.PENDING;
            }
            return share;
        };

        entity.splitBillShareList = entity.splitBillShareList
            .filter(filterByShare)
            .map(updateSplitBillShareStatus);

        return super.create(entity);
    }
}
