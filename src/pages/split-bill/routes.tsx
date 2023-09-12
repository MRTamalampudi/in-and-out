import React from "react";
import {Route, Routes} from "react-router";
import SplitBill from "./split-bill";


export const SPLITBILL_SLUGS = {
    SPLITBILL_GROUP_ID:"splitBillGroupId",
}

const SplitBillRoutes = () => {
  return (
      <>
          <Route path="groups" element={<SplitBill />}>
              <Route path={`:${SPLITBILL_SLUGS.SPLITBILL_GROUP_ID}`} element={<SplitBill />} />
          </Route>
      </>
  )
}

export default SplitBillRoutes;