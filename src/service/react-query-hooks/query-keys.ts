export const QueryKeys = {
    TRANSACTIONS : "transactions",
    TRANSACTEE: "transactee",
    TRANSACTION_SUMMARY : "transaction_summary",
    SPLIT_BILL_GROUP_MEMBERS: "group_members",
    SPLIT_BILL_GROUP: "groups",
    SPLIT_BILL : "bills",
    SPLIT_BILL_SHARE: "splitBillShare"
} as const;

function getParamsObject(omit:string[]) {
    const searchParams = new URLSearchParams(window.location.search);
    const params : Record<string, string>= {};
    searchParams.forEach((value, key) => !omit.includes(key) && (params[key]=value));
    console.log(params)
    return params;
}

export const TransactionQueryKeys = {
    index:[QueryKeys.TRANSACTIONS,getParamsObject(["view"])]
}

export const SplitBillGroupMemberQueryKeys = {
    index: [QueryKeys.SPLIT_BILL_GROUP_MEMBERS]
}

export const SplitBillGroupQueryKeys = {
    index:[QueryKeys.SPLIT_BILL_GROUP]
}

export const SplitBillQueryKeys = {
    index:[QueryKeys.SPLIT_BILL]
}

export const SplitBillShareQueryKeys = {
    index:[QueryKeys.SPLIT_BILL_SHARE]
}