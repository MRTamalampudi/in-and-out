import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MantineProvider} from "@mantine/core";
import {Colors} from "./theme/colors";
import {Route, Routes} from "react-router";
import { BrowserRouter } from "react-router-dom";
import Transactions from "./pages/transactions/transactions";
import SplitBill from "./pages/split-bill/split-bill";
import Demo from "./pages/demo/demo";
import {BaseRoutes} from "./constants/base-routes";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
      <Colors>
          <BrowserRouter>
              <Routes>
                  <Route  path={'/'}  element={
                      <App/>
                  }>
                      <Route path={BaseRoutes.SPLIT_BILL} element={<SplitBill/>}/>
                      <Route path={BaseRoutes.TRANSACTIONS} element={<Transactions/>}>
                          <Route path={":transactionId"} element={<Transactions/>}/>
                      </Route>
                      <Route path={BaseRoutes.SETTINGS} element={<Demo/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </Colors>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
