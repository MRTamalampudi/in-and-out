import {z} from "zod";

type FormEssentials<Entity> = {
    schema:z.ZodObject<any>,
    defaultValues:Partial<Entity>,
    emptyValues:Partial<Entity>
}

export default FormEssentials;