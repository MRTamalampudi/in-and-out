export const QueryKeys = {
    TRANSACTIONS : "transactions",
    TRANSACTEE: "transactee",
    TRANSACTION_SUMMARY : "transaction_summary",
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