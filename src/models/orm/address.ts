import { Column }    from "typeorm";
import { IAddress } from "../address";
//-----------------------------------------------------------------------------
export class Address implements IAddress {
    @Column() Street : string;
    @Column() ZIP    : string;
    @Column() City   : string;
    @Column() Country: string;
}