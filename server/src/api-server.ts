import * as logger  from "winston";
import * as express from "express";
import { Server }   from "typescript-rest";
import * as http    from "http";
import * as path    from "path";
import controllers  from "./controllers";
//-----------------------------------------------------------------------------
export class ApiServer {
    private _app   : express.Application;
    private _server: http.Server;
    public PORT    : number = parseInt(<string>process.env.PORT) || 8080;
    //-------------------------------------------------------------------------
    constructor() {
        this._app = express();
        this.Config();

        Server.useIoC();
        Server.buildServices(this._app, ...controllers);
        Server.swagger(this._app, "./dist/swagger.json", "/api-doc", "localhost:8080", ["http"]);

        logger.configure({
            level: "debug",
            transports: [
                new logger.transports.Console({
                    colorize: true
                })
            ]
        });
    }
    //-------------------------------------------------------------------------
    private Config(): void {
        const viewPath = path.join(__dirname, "..", "src", "wwwroot");

        this._app.use(express.static(viewPath));
    }
    //-------------------------------------------------------------------------
    public Start(): Promise<any> {
        logger.verbose("Starting server");

        return new Promise<any>((resolve, reject) => {
            this._server = this._app.listen(this.PORT, (err: any) => {
                if (err) {
                    return reject(err);
                }

                console.log(`Listening to http://${this._server.address().address}:${this._server.address().port}`);
                return resolve();
            });
        });
    }
    //-------------------------------------------------------------------------
    public Stop(): Promise<any> {
        logger.verbose("Stopping server");

        return new Promise<any>((resolve, reject) => {
            if (this._server) {
                this._server.close(() => {
                    return resolve(true);
                });
            } else {
                return resolve(false);
            }
        });
    }
}