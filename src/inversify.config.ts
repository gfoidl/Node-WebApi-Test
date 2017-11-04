import { Container } from "inversify";
import { TYPES } from "./types";
import { IPersonService } from "./contracts/person-service";
import { PersonService } from "./services/person-service";
import { IController } from "./controllers/controller";
import { HelloController } from "./controllers/hello-controller";
import { PersonController } from "./controllers/person-controller";
//-----------------------------------------------------------------------------
const myContainer = new Container();

myContainer.bind<IPersonService>(TYPES.IPersonService).to(PersonService);
myContainer.bind<IController>(TYPES.HomeControler).to(HelloController);
myContainer.bind<IController>(TYPES.PersonController).to(PersonController);
//-----------------------------------------------------------------------------
export { inject, injectable } from "inversify";
export { TYPES } from "./types";
export { myContainer };