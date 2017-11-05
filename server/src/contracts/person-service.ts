import { Person } from "../models";
//-----------------------------------------------------------------------------
abstract class IPersonService {
    abstract GetAllPersonsAsync()            : Promise<Person[]>;
    abstract StorePersonAsync(person: Person): Promise<Person>;
    abstract GetPersonAsync(name: string)    : Promise<Person | null>;
    abstract DeletePersonAsync(name: string) : Promise<any>;
}
//-----------------------------------------------------------------------------
export { Person } from "../models";
export { IPersonService };