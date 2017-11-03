import { GET, Path, PathParam }                  from "typescript-rest";
import { IPersonService, PersonService, Person } from "../services/person-service";
//-----------------------------------------------------------------------------
@Path("/person")
export class PersonController {
    private _personService: IPersonService;
    //-------------------------------------------------------------------------
    constructor() {
        this._personService = new PersonService();
    }
    //-------------------------------------------------------------------------
    @Path("create/:name/:age")
    @GET
    public CreatePerson(
        @PathParam("name") name : string,
        @PathParam("age")  age  : number): Person {
        return new Person(name, age);
    }
    //-------------------------------------------------------------------------
    @Path("all")
    @GET
    public async GetAllPersons(): Promise<Person[]> {
        const persons = await this._personService.GetAllPersons();
        return persons;
    }
}