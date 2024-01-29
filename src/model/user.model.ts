import { z } from "zod";

class User {
    id:number;
    firstName:string;
    lastName:string;
    email:string;

    public getFullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }


    static deserialise(object:User): User{
        return Object.assign(new User(),object)
    }
}

export default User;

//@ts-ignore
export const userSchema = () => {
    // @ts-ignore
    const schema = z.object<User>({
        id: z.number().optional(),
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        email: z.string().optional(),
    });

    return schema;
};