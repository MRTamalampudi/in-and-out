import {BaseService} from "./base.service";
import {SplitBillGroup} from "model";
import {netflix} from "../assets";
import {fakerEN_IN} from "@faker-js/faker";

class SplitBillGroupService {
    create(data: SplitBillGroup): Promise<SplitBillGroup> {
        return Promise.resolve(new SplitBillGroup());
    }

    delete(id: number): void {
    }

    get(id: number): SplitBillGroup {
        return new SplitBillGroup();
    }

    // index(query: string): Promise<SplitBillGroup> {
    //     const data:SplitBillGroup[] = [];
    //     for(let i = 1;i<21 ; i++){
    //         const splitBillGroup:SplitBillGroup = new SplitBillGroup();
    //         splitBillGroup.id = i;
    //         splitBillGroup.avatar = netflix;
    //         splitBillGroup.name = fakerEN_IN.word.words({count:{min:2,max:3}});
    //         splitBillGroup.lentShare = parseInt(fakerEN_IN.finance.amount({min:20,max:99,dec:0}));
    //         splitBillGroup.oweShare = parseInt(fakerEN_IN.finance.amount({min:20,max:99,dec:0}));
    //         data.push(splitBillGroup)
    //     }
    //
    //     return Promise.resolve(data);
    // }

    update(data: SplitBillGroup): Promise<SplitBillGroup> {
        return Promise.resolve(new SplitBillGroup());
    }

}

export default SplitBillGroupService;