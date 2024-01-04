import { BaseService } from "./base.service";
import { fakerEN_IN } from "@faker-js/faker";
import { TransactionTypeEnum } from "enum";
import { Transaction } from "model";
import axios from "axios";
import Page from "../model/page";
import * as process from "process";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;
import { ColumnFiltersState, PaginationState } from "@tanstack/react-table";

const TRANSACTIONS_BASE_URL = process.env.REACT_APP_API_KEY + "/transactions";

export function indexTransactions(
    { pageIndex, pageSize }: PaginationState,
    filters:ColumnFiltersState
): Promise<Page<Transaction>> {
    const adjustedPage = pageIndex !== 0 ? pageIndex - 1 : 0;
    const urlSearchParams = new URLSearchParams({
        page: adjustedPage.toString(),
        size: pageSize.toString(),
        sort: "createdAt,desc",
        q: filters.map(filter=>`${filter.id}~${filter.value}`).join(",")
    });
    return axios
        .get<Page<Transaction>>(
            `${TRANSACTIONS_BASE_URL}?${urlSearchParams.toString()}`,
        )
        .then((result) => result.data)
        .catch((error) => error);
}

export function getTransaction(id: number): Promise<Transaction> {
    return axios
        .get<Transaction>(`${TRANSACTIONS_BASE_URL}/${id}`)
        .then((response) => Transaction.deserialize(response.data))
        .catch((error) => error);
}

export function createTransaction(
    transaction: Transaction,
): Promise<Transaction> {
    return axios
        .post(TRANSACTIONS_BASE_URL, transaction)
        .then((response) => response.data)
        .catch((error) => error);
}

export function deleteTransaction(transactionIds: number[]): Promise<unknown> {
    const searchParams = new URLSearchParams()
    searchParams.set("q",`id@${transactionIds.join(",")}`)
    return axios
        .delete(`${TRANSACTIONS_BASE_URL}?${searchParams.toString()}`)
        .catch((error) => error);
}
