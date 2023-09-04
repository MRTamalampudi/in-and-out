import {TransactionTypeEnum} from "enums";


export  class Transaction {
    private _id: number;
    private _note: string;
    private _transactee: string;
    private _date: string;
    private _category: string;
    private _type: TransactionTypeEnum;
    private _amount: string;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get note(): string {
        return this._note;
    }

    set note(value: string) {
        this._note = value;
    }

    get transactee(): string {
        return this._transactee;
    }

    set transactee(value: string) {
        this._transactee = value;
    }

    get date(): string {
        return this._date;
    }

    set date(value: string) {
        this._date = value;
    }

    get category(): string {
        return this._category;
    }

    set category(value: string) {
        this._category = value;
    }

    get type(): TransactionTypeEnum {
        return this._type;
    }

    set type(value: TransactionTypeEnum) {
        this._type = value;
    }

    get amount(): string {
        return this._amount;
    }

    set amount(value: string) {
        this._amount = value;
    }
}