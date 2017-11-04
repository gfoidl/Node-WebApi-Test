import { Person, IPersonService } from "../contracts/person-service";
//-----------------------------------------------------------------------------
class PersonService implements IPersonService {
    public GetAllPersons(): Promise<Person[]> {
        return new Promise<Person[]>((resolve, reject) => {
            const persons = PersonService.CreateDummyPersons();

            resolve(persons);
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