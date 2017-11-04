import { Person } from "../models/person";
//-----------------------------------------------------------------------------
abstract class IPersonService {
    abstract GetAllPersons()   : Promise<Person[]>;
    abstract StorePerson(person: Person): Promise<Person>;
}
//-----------------------------------------------------------------------------
export { Person } from "../models/person";
export { IPersonService };