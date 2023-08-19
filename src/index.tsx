import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MantineProvider} from "@mantine/core";
import {Colors} from "./theme/colors";
import {Route, Routes} from "react-router";
import Dashboard from "./pages/dashboard/dashboard";
import { BrowserRouter } from "react-router-dom";
import Books from "./pages/books/books";
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
                      <Route path={'dashboard'} element={<Books/>}/>
                      <Route path={BaseRoutes.SPLIT_BILL} element={<SplitBill/>}/>
                      <Route path={BaseRoutes.TRANSACTIONS} element={<Transactions/>}/>
                      <Route path={'settings/test'} element={<Demo/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </Colors>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
