import * as logger                 from "winston";
import { Provides }               from "typescript-ioc";
import { Person, IPersonService } from "../contracts/person-service";
//-----------------------------------------------------------------------------
@Provides(IPersonService)
class PersonService implements IPersonService {
    public GetAllPersons(): Promise<Person[]> {
        return new Promise<Person[]>((resolve, reject) => {
            const persons = PersonService.CreateDummyPersons();

            resolve(persons);
        });
    }
    //-------------------------------------------------------------------------
    public StorePerson(person: Person): Promise<Person> {
        logger.warn("PersonService.StorePerson is not implemented, only a fake");

        return new Promise<Person>((res, rej) => {
            res(person);
        });
    }
    //-------------------------------------------------------------------------
    private static CreateDummyPersons(): Person[] {
        const p1 = new Person("Adam", 32);
        const p2 = new Person("Berta", 67);

        return [p1, p2];
    }
}
//-----------------------------------------------------------------------------
export { Person, IPersonService } from "../contracts/person-service";
export { PersonService };