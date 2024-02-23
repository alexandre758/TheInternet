import { pega } from "pega-model";
import { Controller, Feature, Selector } from "test-maker";


Feature('Dropdown')
.Scenario('scénario 1')
.Given('connexion au site', async(I) => {
    await I.goto('https://the-internet.herokuapp.com/dropdown')
})
.Then('3 éléments dans la liste', async (I: Controller) => {
    const options = await Selector('select > option').count
    await I.expect(options).toEqual(3)
})
.When('je choisi l option 1',async()=>{
    await pega.dropdownByXPath('//select').select('1')
})
.Then('la liste contient un choix option 2', async() => {
    await pega.dropdownByXPath('//select').shouldHaveSuggestedItemsByInnerText(['Option 2'])
})


/*
* Être sur la page https://the-internet.herokuapp.com/dropdown
* Vérifier que la liste dépliable affiche 3 choix
* Choisir Option 1
* Vérifier que la liste contient un choix Option 2
*/