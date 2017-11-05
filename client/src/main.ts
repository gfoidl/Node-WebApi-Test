import { Person, IPersonService } from "./contracts";
import * as services              from "./services";
//-----------------------------------------------------------------------------
$(async () => {
    const personService: IPersonService = new services.PersonService();
    const vm                            = new MainViewModel(personService);

    try {
        await vm.Start();
        console.info("done");
    } catch (e) {
        const err = <Error>e;
        const msg = `${err.name}\n\n${err.message}`;

        console.error(msg);
        alert(msg);
    }
});
//-----------------------------------------------------------------------------
class MainViewModel {
    private _personService: IPersonService;
    public persons        : KnockoutObservableArray<Person>;
    public cities         : KnockoutObservableArray<string>;
    //-------------------------------------------------------------------------
    constructor(personService: IPersonService) {
        this._personService = personService;
    }
    //-------------------------------------------------------------------------
    public async Start(): Promise<void> {
        const persons = await this._personService.GetPersonsAsync();
        this.persons  = ko.observableArray(persons);
        this.cities   = ko.observableArray([]);

        for (let p of persons) {
            const city = p.Address.City;

            if (this.cities.indexOf(city) < 0)
                this.cities.push(city);
        }

        console.debug("data here");
        console.debug("applying bindings");

        ko.applyBindings(this);

        console.info("viewmodel bound");

        $("#content").show("blind", 500);
    }
}