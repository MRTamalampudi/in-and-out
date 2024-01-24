import { SplitAlgo } from "enum";
import User from "model/user.model";

class SplitBill {
    id:number;
    bill:string;
    amount:number;
    splitAlgo:SplitAlgo;
    date:Date;
    paidBy:User;
    createdBy:User;
    createdAt:Date;
    modifiedAt:Date;

    static deserialise(object:SplitBill):SplitBill{
        object.date = new Date((object.date as unknown as number) * 1000);
        object.createdAt = new Date((object.createdAt as unknown as number) * 1000);
        object.modifiedAt = new Date((object.modifiedAt as unknown as number) * 1000);

        return Object.assign(new SplitBill(),object);
    }
}
export default SplitBill;