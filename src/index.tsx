import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Colors } from "theme/colors";
import "@mantine/core/styles.css";
import "styles/mantine/index.scss";
import "@mantine/dates/styles.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
      <Colors>
          {/*<BrowserRouter>*/}
          {/*    <Routes>*/}
          {/*        <Route  path={'/'}  element={*/}
          {/*            <App/>*/}
          {/*        }>*/}
          {/*            <Route path={BaseRoutes.SPLIT_BILL} element={<SplitBillPage/>}/>*/}
          {/*            <Route path={BaseRoutes.TRANSACTIONS} element={<TransactionsPage/>}>*/}
          {/*                {TransactionRoutes()}*/}
          {/*            </Route>*/}
          {/*            <Route path={BaseRoutes.SETTINGS} element={<Demo/>}/>*/}
          {/*            <Route path={BaseRoutes.PLAY_GROUND} element={<PlayGround/>} />*/}
          {/*        </Route>*/}
          {/*        <Route path={BaseRoutes.LOGIN} element={<Login/>}/>*/}
          {/*    </Routes>*/}
          {/*</BrowserRouter>*/}
          <RouterProvider router={router}/>
      </Colors>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
