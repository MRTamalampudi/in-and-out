import React from "react";
import {Route, Routes} from "react-router";
import SplitBillPage from "./split-bill.page";


export const SPLITBILL_ROUTES = {
    SPLITBILL_GROUP_ID:"splitBillGroupId",
    GROUPS: "groups",
    BILLS: "bills",
    BILL_ID: "billId"
}

const SplitBillRoutes = () => {
  return (
      <>
          <Route path={SPLITBILL_ROUTES.GROUPS} element={<SplitBillPage />}>
              <Route path={`:${SPLITBILL_ROUTES.SPLITBILL_GROUP_ID}`} element={<SplitBillPage />}>
                  <Route path={SPLITBILL_ROUTES.BILLS} element={<SplitBillPage/>}>
                      <Route path={`:${SPLITBILL_ROUTES.BILL_ID}`} element={<SplitBillPage/>}/>
                  </Route>
              </Route>
          </Route>
      </>
  )
}

export default SplitBillRoutes;