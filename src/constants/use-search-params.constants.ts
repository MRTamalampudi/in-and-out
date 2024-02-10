import { useMemo } from "react";

export const useSearchParamsConstants =()=> {
    return useMemo(()=>({
        PAGE_INDEX: "page",
        PAGE_SIZE: "size",
        GROUP_PAGE_INDEX: "gpage",
        GROUP_PAGE_SIZE : "gsize",
        GROUP: "group",
        bill: "bill",
        NEW_GROUP: "new_group",
        NEW_BILL: "new_bill"
    }),[])
};
