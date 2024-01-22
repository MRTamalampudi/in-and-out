import * as process from "process";
import axios from "axios";
import { SplitBillGroup } from "model";
import Page from "model/page";
import { BaseService } from "service/base.service";
import SplitBillGroupMember from "model/split-bill-group-member.model";
import { URL_CONSTANTS } from "constants/url-constants";

const SPLIT_BILL_GROUP_BASE_URL = process.env.REACT_APP_API_KEY + "/split_bill_group";

export class SplitBillGroupService extends BaseService<SplitBillGroup> {
    public BaseURL: string = URL_CONSTANTS.SPLIT_BILL_GROUP;
    private static instance:SplitBillGroupService;
    private constructor() {
        super(URL_CONSTANTS.SPLIT_BILL_GROUP,(entity)=>undefined);
    }

    public static getInstance():SplitBillGroupService{
        if(!SplitBillGroupService.instance){
            SplitBillGroupService.instance = new SplitBillGroupService();
        }

        return SplitBillGroupService.instance;
    }
}