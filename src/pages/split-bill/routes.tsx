import SplitBillPage from "./split-bill.page";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "router";
import { z } from "zod";

export const SPLITBILL_ROUTES = {
    SPLITBILL_GROUP_ID: "splitBillGroupId",
    GROUPS: "groups",
    BILLS: "bills",
    BILL_ID: "billId",
};

const searchParamsSchema = z.object({
    page:z.number().catch(1).optional(),
    gpage:z.number().catch(1).optional(),
    size:z.number().catch(1).optional(),
    gsize:z.number().catch(1).optional(),
    group:z.number().optional(),
    bill:z.number().optional(),
    newGroup:z.boolean().catch(false).optional(),
    newBill:z.boolean().catch(false).optional(),
})

export const splitBillRoute = createRoute({
    getParentRoute:()=>rootRoute,
    component:SplitBillPage,
    path:"split_bill",
    validateSearch:searchParamsSchema,
})