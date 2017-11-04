export interface IAddress {
	Street : string;
	ZIP	   : string;
	City   : string;
	Country: string;
}
//-----------------------------------------------------------------------------
export class Address {
	public static Default(): IAddress {
		const addr: IAddress = {
			Street : "Fake Street",
			ZIP	   : "8010",
			City   : "Graz",
			Country: "Austria"
		};

		return addr;
	}
}