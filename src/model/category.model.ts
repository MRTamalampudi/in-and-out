import {z} from "zod";

class Category {
    id: number;
    name: string;
}

// @ts-ignore
export const categorySchema = z.object<Category>({
    id:z.number(),
    name:z.string(),
})

export default Category;