import Page from "../model/page";
import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import axios from "axios";

type SerializerFn<T> = (entity: T) => void;
type DeserializerFn<T> = SerializerFn<T>

export abstract class BaseService<Entity> {
    protected BaseURL: string;
    protected deserializerFn: DeserializerFn<Entity>;
    protected serializerFn: SerializerFn<Entity>;
    protected constructor(
        BaseURL: string,
        deserializerFn: DeserializerFn<Entity>,
        serializerFn: SerializerFn<Entity> = ()=>null
    ) {
        this.BaseURL = BaseURL;
        this.deserializerFn = deserializerFn;
        this.serializerFn = serializerFn;
    }

    public index(
        { pageIndex, pageSize }: PaginationState,
        filters: ColumnFiltersState,
        sorting: SortingState,
    ): Promise<Page<Entity>> {
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
            .get<Page<Entity>>(`${this.BaseURL}?${urlSearchParams.toString()}`)
            .then((result) => {
                result.data.content.forEach(this.deserializerFn);
                return result.data;
            })
            .catch((error) => error);
    }

    public get(id: number): Promise<Entity> {
        return axios
            .get<Entity>(`${this.BaseURL}/${id}`)
            .then((response) => {
                this.deserializerFn(response.data);
                return response.data;
            })
            .catch((error) => {
                throw new Error(error);
            });
    }

    public create(entity: Entity): Promise<Entity> {
        this.serializerFn(entity)
        console.log(entity,this.BaseURL)
        return axios
            .post(this.BaseURL, entity)
            .then((response) => {
                this.deserializerFn(response.data);
                return response.data;
            })
            .catch((error) => {
                throw new Error(error);
            });
    }

    public delete(entityIds:number[]):Promise<unknown>{
        const searchParams = new URLSearchParams();
        searchParams.set("q", `id@${entityIds.join(",")}`);
        return axios
            .delete(`${this.BaseURL}?${searchParams.toString()}`)
            .catch((error) => {
                throw new Error(error);
            });
    }
}
