import { Person } from "../../server/src/models/person";
//-----------------------------------------------------------------------------
interface IPersonService {
    GetPersonsAsync(): Promise<Person[]>;
}
//-----------------------------------------------------------------------------
export { Person } from "../../server/src/models/person";
export { IPersonService };