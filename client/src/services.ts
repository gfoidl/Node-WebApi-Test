import { Person, IPersonService } from "./contracts";
//-----------------------------------------------------------------------------
export class PersonService implements IPersonService {
    public async GetPersonsAsync(): Promise<Person[]> {
        try {
            return <Person[]>await $.getJSON("/person/all");
        } catch (e) {
            this.HandleError(e);
        }
    }
    //-------------------------------------------------------------------------
    private HandleError(e): void {
        console.error("Error");
        console.error(e.responseText);
        alert(`An error occured:\n\n${e.responseText}`);
    }
}