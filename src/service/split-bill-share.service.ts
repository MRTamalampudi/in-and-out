import { BaseService } from "service/base.service";
import { URL_CONSTANTS } from "constants/url.constants";
import SplitBillShare from "model/split-bill-share.model";
import { SplitBill, User } from "model";
import Page from "model/page";

export class SplitBillShareService extends BaseService<SplitBillShare> {
    public BaseURL: string = URL_CONSTANTS.SPLIT_BILL_SHARE;
    private static instance: SplitBillShareService;

    private constructor() {
        super(URL_CONSTANTS.SPLIT_BILL_SHARE, (entity) => SplitBillShare.deserialize(entity));
    }

    public static getInstance(): SplitBillShareService {
        if (!SplitBillShareService.instance) {
            SplitBillShareService.instance = new SplitBillShareService();
        }

        return SplitBillShareService.instance;
    }

    index(params: Record<string, any>): Promise<Page<SplitBillShare>> {
        const name = params["q"];
        const group = params["group"];

        params["q"] = ""
        name && (params["q"] = `name~${name}`);
        (group>=0) && (params["q"] = params["q"] + `,group:${group}`)

        delete params["group"]
        return super.index(params);
    }
}