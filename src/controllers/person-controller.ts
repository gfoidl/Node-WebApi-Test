import { GET, Path, PathParam }   from "typescript-rest";
import { Inject }                 from "typescript-ioc";
import { IPersonService, Person } from "../services/person-service";
//-----------------------------------------------------------------------------
@Path("/person")
export class PersonController {
    private _personService: IPersonService;
    //-------------------------------------------------------------------------
    constructor( @Inject personService: IPersonService) {
        this._personService = personService;
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