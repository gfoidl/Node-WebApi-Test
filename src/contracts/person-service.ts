import { Person } from "../models/person";
export { Person } from "../models/person";
//-----------------------------------------------------------------------------
export interface IPersonService {
    GetAllPersons(): Promise<Person[]>;
}