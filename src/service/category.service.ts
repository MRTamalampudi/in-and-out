import {Category} from "../model";
import axios from "axios";
import * as process from "process";
import Page from "../model/page";
import {Simulate} from "react-dom/test-utils";
import {useQuery} from "@tanstack/react-query";

const CATEGORY:string = "category";

export function indexCategories():Promise<Category[]> {
    return axios.get<Page<Category>>(process.env.REACT_APP_API_KEY + "/" + CATEGORY)
        .then(response => response.data.content)
        .catch(error=>error);
}

export function useIndexCategoryQuery() {
    return useQuery({
        queryKey: [CATEGORY],
        queryFn: indexCategories,
    });
}