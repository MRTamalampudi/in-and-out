import Page from "../model/page";
import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import axios from "axios";
import { URL_CONSTANTS } from "constants/url-constants";

export abstract class BaseService<T> {
    public BaseURL: string;
    protected constructor(BaseURL: string) {
        this.BaseURL = BaseURL;
    }

    public index(
        { pageIndex, pageSize }: PaginationState,
        filters: ColumnFiltersState,
        sorting: SortingState,
    ): Promise<Page<T>> {
        const adjustedPage = pageIndex !== 0 ? pageIndex - 1 : 0;
        const urlSearchParams = new URLSearchParams({
            page: adjustedPage.toString(),
            size: pageSize.toString(),
            sort: "createdAt,desc",
            q: filters
                .map((filter) => `${filter.id}~${filter.value}`)
                .join(","),
        });
        sorting.map((sort) =>
            urlSearchParams.set(
                "sort",
                `${sort.id},${sort.desc ? "desc" : "asc"}`,
            ),
        );

        return axios
            .get<Page<T>>(`${this.BaseURL}?${urlSearchParams.toString()}`)
            .then((result) => {
                return result.data;
            })
            .catch((error) => error);
    }
}