import { Address, IAddress } from "./address";
import "../extension-methods";
//-----------------------------------------------------------------------------
export class Person {
	public Name	  : string;
	public Age	  : number;
	public Address: IAddress;
	//-------------------------------------------------------------------------
	constructor(name: string, age: number) {
		this.Name	 = name.toFirstUpper();
		this.Age	 = age;
		this.Address = Address.Default();
	}
}