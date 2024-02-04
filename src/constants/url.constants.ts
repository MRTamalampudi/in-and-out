import * as process from "process";

const BASE_URL = process.env.REACT_APP_BASE_URL;


export const URL_CONSTANTS = {
    SPLIT_BILL_GROUP_MEMBERS : `${BASE_URL}/group_members`,
    SPLIT_BILL_GROUP : `${BASE_URL}/groups`,
    TRANSACTIONS: `${BASE_URL}/transactions`,
    SPLIT_BILL: `${BASE_URL}/split_bill`,
    SPLIT_BILL_SHARE: `${BASE_URL}/split_bill_share`,
    USER:`${BASE_URL}/user`
}