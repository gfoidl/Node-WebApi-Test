import * as logger                from "winston";
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
        @PathParam("name") name: string,
        @PathParam("age")  age : number
        ): Promise<Person> {
        logger.verbose(`creating new person with name: ${name}`);

        const person = new Person(name, age);
        return this._personService.StorePersonAsync(person);
    }
    //-------------------------------------------------------------------------
    @Path("all")
    @GET
    public GetAllPersons(): Promise<Person[]> {
        logger.verbose("getting all persons");
        return this._personService.GetAllPersonsAsync();
    }
}