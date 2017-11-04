import { Person } from "../models/person";
//-----------------------------------------------------------------------------
interface IPersonService {
    GetAllPersons(): Promise<Person[]>;
}
//-----------------------------------------------------------------------------
export { Person } from "../models/person";
export { IPersonService };