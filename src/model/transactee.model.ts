import {z} from "zod";

class Transactee{
    id: number;
    name: string;
    description: string;
}

// @ts-ignore
export const transacteeSchema = z.object<Transactee>({
    id:z.number(),
    name:z.string(),
    description:z.string().optional(),
})

type ts = z.infer<typeof transacteeSchema>;



export default Transactee;