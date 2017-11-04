import * as logger                                       from "winston";
import { GET, Path, PathParam, Context, ServiceContext } from "typescript-rest";
import "../extension-methods";
//-----------------------------------------------------------------------------
@Path("/hello")
export class HelloController {
    @Context
    private _context: ServiceContext;
    //-------------------------------------------------------------------------
    @Path(":name")
    @GET
    public SayHello( @PathParam("name") name: string): string {
        logger.debug(`received request from ${this._context.request.socket.address().address}`);

        return `Hello ${name.toFirstUpper()}`;
    }
}