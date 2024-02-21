import Page from "../model/page";
import {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";
import axios from "axios";
import { en } from "@faker-js/faker";
import { useConstructSearchParams } from "service/react-query-hooks/base.query";

type SerializerFn<T> = (entity: T) => void;
type DeserializerFn<T> = (entity: T) => T;

export abstract class BaseService<Entity> {
    protected BaseURL: string;
    protected deserializerFn: DeserializerFn<Entity>;
    protected serializerFn: SerializerFn<Entity>;
    protected constructor(
        BaseURL: string,
        deserializerFn: DeserializerFn<Entity> = (entity: Entity) => entity,
        serializerFn: SerializerFn<Entity> = () => null,
    ) {
        this.BaseURL = BaseURL;
        this.deserializerFn = deserializerFn;
        this.serializerFn = serializerFn;
    }

    public index(
        params:Record<string, any>
    ): Promise<Page<Entity>> {
        const adjustedPage:number = parseInt(params["page"])
        params["page"] = adjustedPage !== 0 ? adjustedPage - 1 : 0;
        const searchParams:URLSearchParams = new URLSearchParams(params);
        console.log(searchParams.toString())
        return axios
            .get<Page<Entity>>(`${this.BaseURL}?${searchParams.toString()}&sort=createdAt,desc`)
            .then((result) => {
                console.log("trrrrrrr",result.data);
                result.data.content.forEach(
                    (entity) => {
                        entity = this.deserializerFn(entity);
                        console.log("for each,",entity)
                    },
                );
                console.log("trrrrrrr",result.data);
                return result.data;
            })
            .catch((error) => error);
    }

    public get(id: number): Promise<Entity> {
        return axios
            .get<Entity>(`${this.BaseURL}/${id}`)
            .then((response) => {
                response.data = this.deserializerFn(response.data);
                return response.data;
            })
            .catch((error) => {
                throw new Error(error);
            });
    }

    public create(entity: Entity): Promise<Entity> {
        this.serializerFn(entity);
        console.log(entity, this.BaseURL);
        return axios
            .post(this.BaseURL, entity)
            .then((response) => {
                response.data = this.deserializerFn(response.data);
                return response.data;
            })
            .catch((error) => {
                throw new Error(error);
            });
    }

    public delete(entityIds: number[]): Promise<unknown> {
        const searchParams = new URLSearchParams();
        searchParams.set("q", `id@${entityIds.join(",")}`);
        return axios
            .delete(`${this.BaseURL}?${searchParams.toString()}`)
            .catch((error) => {
                throw new Error(error);
            });
    }
    public update(entity: Entity) {
        return axios
            .put(`${this.BaseURL}`, entity)
            .then((res) => res.data)
            .catch((error) => {
                throw new Error(error);
            });
    }
}
