import { Person } from "./models";
//-----------------------------------------------------------------------------
interface IPersonService {
    GetPersonsAsync(): Promise<Person[]>;
}
//-----------------------------------------------------------------------------
export { Person } from "./models";
export { IPersonService };