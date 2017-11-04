import { Entity, Column, ObjectID, ObjectIdColumn } from "typeorm";
import { Person as IPerson }						from "../person";
import { Address as IAddress }						from "./address";
//-----------------------------------------------------------------------------
@Entity()
export class Person implements IPerson {
	@ObjectIdColumn()			public Id	  : ObjectID;
	@Column()					public Name	  : string;
	@Column()					public Age	  : number;
	@Column(type => IAddress)	public Address: IAddress;
}