import * as process from "process";

const BASE_URL = process.env.REACT_APP_BASE_URL;


export const URL_CONSTANTS = {
    SPLIT_BILL_GROUP_MEMBERS : `${BASE_URL}/group_members`,
    SPLIT_BILL_GROUP : `${BASE_URL}/groups`,
    TRANSACTIONS: `${BASE_URL}/transactions`
}