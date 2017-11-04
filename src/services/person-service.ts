import * as logger                 from "winston";
import * as db                    from "typeorm";
import * as orm                   from "../models/orm";
import { Person, IPersonService } from "../contracts/person-service";
import { Provides }               from "typescript-ioc";
import { CallCCtor }              from "../extension-methods";
//-----------------------------------------------------------------------------
@Provides(IPersonService)
@CallCCtor
class PersonService implements IPersonService {
    public static async StaticConstruct(): Promise<db.Connection> {
        logger.debug("PersonService.CCtor");

        return PersonService.ConnectAsync();
    }
    //-------------------------------------------------------------------------
    public async GetAllPersonsAsync(): Promise<Person[]> {
        try {
            const res = await this.GetRepo().findAndCount();

            logger.info(`queried ${res[1]} entries`);
            return res[0];
        } catch (e) {
            const err = <Error>e;
            logger.error(err.message);
            throw err;
        }
    }
    //-------------------------------------------------------------------------
    public async StorePersonAsync(person: Person): Promise<Person> {
        try {
            let ormPerson = <orm.Person>person;
            ormPerson     = await this.GetRepo().save(ormPerson);

            logger.info(`person with ID ${ormPerson.Id} stored`);

            return ormPerson;
        } catch (e) {
            const err = <Error>e;
            logger.error(err.message);
            throw err;
        }
    }
    //-------------------------------------------------------------------------
    public async GetPersonAsync(name: string): Promise<Person | null> {
        try {
            const person = await this.GetRepo().findOne({
                Name: name
            } as orm.Person);

            if (!person) return null;
            return person;
        } catch (e) {
            const err = <Error>e;
            logger.error(err.message);
            throw err;
        }
    }
    //-------------------------------------------------------------------------
    public async DeletePersonAsync(name: string): Promise<any> {
        try {
            const result = await this.GetRepo().deleteOne({
                Name: name
            } as orm.Person);
            return result.deletedCount == 0 ? null : result.result;
        } catch (e) {
            const err = <Error>e;
            logger.error(err.message);
            throw err;
        }
    }
    //-------------------------------------------------------------------------
    private GetRepo(): db.MongoRepository<orm.Person> {
        return db.getMongoRepository(orm.Person);
    }
    //-------------------------------------------------------------------------
    private static async ConnectAsync(): Promise<db.Connection> {
        const connOptions = {
            type    : "mongodb",
            host    : "ds245805.mlab.com",
            port    : 45805,
            username: process.env.MONGO_USER,
            password: process.env.MONGO_PASSWORD,
            database: "node-test",
            entities: [
                orm.Person,
                orm.Address
            ]
        } as db.ConnectionOptions;

        try {
            return await db.createConnection(connOptions);
        } catch (e) {
            const err = <Error>e;
            logger.error(err.message);
            throw err;
        }
    }
}
//-----------------------------------------------------------------------------
export { Person, IPersonService } from "../contracts/person-service";
export { PersonService };