class User {
    id:number;
    firstName:string;
    lastName:string;
    mobile:string;
    darkMode:boolean;
    currency:number;

    public getFullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }


    static deserialise(object:User): User{
        return Object.assign(new User(),object)
    }
}

export default User;