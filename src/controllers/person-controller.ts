import * as logger                              from "winston";
import { GET, DELETE, Path, PathParam, Errors } from "typescript-rest";
import { Inject }                               from "typescript-ioc";
import { IPersonService, Person }               from "../services/person-service";
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
    //-------------------------------------------------------------------------
    @Path(":name")
    @GET
    public async GetPerson( @PathParam("name") name: string): Promise<Person | Errors.NotFoundError> {
        logger.verbose(`getting person with name ${name}`);
        const person = await this._personService.GetPersonAsync(name);

        return person == null
            ? new Errors.NotFoundError(`No person with name ${name} was found`)
            : person;
    }
    //-------------------------------------------------------------------------
    @Path(":name")
    @DELETE
    public async DeletePerson( @PathParam("name") name: string): Promise<any> {
        logger.verbose(`deleting person with name ${name}`);
        const person = await this._personService.DeletePersonAsync(name);

        return person == null
            ? new Errors.NotFoundError(`No person with name ${name} was found`)
            : person;
    }
}