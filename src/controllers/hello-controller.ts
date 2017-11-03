import { GET, Path, PathParam } from "typescript-rest";
import "../extension-methods";
//-----------------------------------------------------------------------------
@Path("/hello")
export class HelloController {
    @Path(":name")
    @GET
    public SayHello( @PathParam("name") name: string): string {
        return `Hello ${name.toFirstUpper()}`;
    }
}