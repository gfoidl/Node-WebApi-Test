import { Address, IAddress } from "./address";
//-----------------------------------------------------------------------------
export class Person {
    public Name   : string;
    public Age    : number;
    public Address: IAddress;
    //-------------------------------------------------------------------------
    constructor(name: string, age: number) {
        this.Name    = name;
        this.Age     = age;
        this.Address = Address.Default();
    }
}