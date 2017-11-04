import { Person } from "../models/person";
//-----------------------------------------------------------------------------
abstract class IPersonService {
    abstract GetAllPersonsAsync()            : Promise<Person[]>;
    abstract StorePersonAsync(person: Person): Promise<Person>;
}
//-----------------------------------------------------------------------------
export { Person } from "../models/person";
export { IPersonService };