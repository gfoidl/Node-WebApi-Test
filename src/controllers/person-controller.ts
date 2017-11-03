import { GET, Path, PathParam } from "typescript-rest";
import { Person }               from "../models/person";
//-----------------------------------------------------------------------------
@Path("/person")
export class PersonController {
    @Path("create/:name/:age")
    @GET
    public CreatePerson(
        @PathParam("name") name : string,
        @PathParam("age")  age  : number): Person {
        return new Person(name, age);
    }
}