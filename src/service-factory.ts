import { ServiceFactory as IServiceFactory } from "typescript-rest";
import { inject, myContainer, TYPES } from "./inversify.config";
import { IController } from "./controllers/controller";
//-----------------------------------------------------------------------------
export class ServiceFactory implements IServiceFactory {
    //create: (serviceClass: Function) => null;
    //getTargetClass: (serviceClass: Function) => FunctionConstructor;

    public create(serviceClass: Function): any {
        console.dir(serviceClass);
    }

    public getTargetClass(serviceClass: Function): any {
        return myContainer.get<IController>(serviceClass.name);
    }
}