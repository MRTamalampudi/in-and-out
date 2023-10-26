import Pageable from "./pageable";

class Page <T> {
    public content: T[];
    public totalElements: number;
    public totalPages: number;
    public pageable: Pageable;
    public numberOfElements: number;
    public first: boolean;
    public last: boolean;
    public empty: boolean;
}

export default Page;