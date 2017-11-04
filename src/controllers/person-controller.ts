import { GET, Path, PathParam }      from "typescript-rest";
import { injectable, inject, TYPES } from "../inversify.config";
import { IPersonService, Person }    from "../contracts/person-service";
import { IController }               from "./controller";
//-----------------------------------------------------------------------------
@injectable()
@Path("/person")
export class PersonController implements IController {
    private _personService: IPersonService;
    //-------------------------------------------------------------------------
    constructor(
        @inject(TYPES.IPersonService) personService: IPersonService
    ) {
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