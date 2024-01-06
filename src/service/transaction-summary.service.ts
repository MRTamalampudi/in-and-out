import * as process from "process";
import axios from "axios";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;
import TransactionSummary from "model/transaction-summary.model";

const TRANSACTION_SUMMARY_BASE_URL = process.env.REACT_APP_API_KEY + "/transaction_summary";

export function getTransactionSummary():Promise<TransactionSummary>{
    return axios.get<TransactionSummary>(TRANSACTION_SUMMARY_BASE_URL)
        .then(response=>response.data)
        .catch(error=>error)
}