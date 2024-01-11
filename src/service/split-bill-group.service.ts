import * as process from "process";
import axios from "axios";
import { SplitBillGroup } from "model";
import Page from "model/page";

const SPLIT_BILL_GROUP_BASE_URL = process.env.REACT_APP_API_KEY + "/split_bill_group";

export function index() {
    return axios.get<Page<SplitBillGroup>>(SPLIT_BILL_GROUP_BASE_URL)
}