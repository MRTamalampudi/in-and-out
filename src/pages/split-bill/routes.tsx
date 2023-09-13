import React from "react";
import {Route, Routes} from "react-router";
import SplitBill from "./split-bill";


export const SPLITBILL_ROUTES = {
    SPLITBILL_GROUP_ID:"splitBillGroupId",
    GROUPS: "groups",
    BILLS: "bills",
    BILL_ID: "billId"
}

const SplitBillRoutes = () => {
  return (
      <>
          <Route path={SPLITBILL_ROUTES.GROUPS} element={<SplitBill />}>
              <Route path={`:${SPLITBILL_ROUTES.SPLITBILL_GROUP_ID}`} element={<SplitBill />}>
                  <Route path={SPLITBILL_ROUTES.BILLS} element={<SplitBill/>}>
                      <Route path={`:${SPLITBILL_ROUTES.BILL_ID}`} element={<SplitBill/>}/>
                  </Route>
              </Route>
          </Route>
      </>
  )
}

export default SplitBillRoutes;