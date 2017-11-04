import { injectable }           from "inversify";
import { GET, Path, PathParam } from "typescript-rest";
import { IController }          from "./controller";
import "../extension-methods";
//-----------------------------------------------------------------------------
@injectable()
@Path("/hello")
export class HelloController implements IController {
    @Path(":name")
    @GET
    public SayHello( @PathParam("name") name: string): string {
        return `Hello ${name.toFirstUpper()}`;
    }
}