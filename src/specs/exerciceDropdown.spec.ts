import { pega } from "pega-model";
import { Controller, Feature, Selector } from "test-maker";


Feature('exercice dropdown')
.Scenario('scénario 1')
.Given('connexion au site', async(page: Controller) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown')
})
.Then('3 éléments dans la liste', async (I: Controller) => {
    const options = await Selector('select > option').count
    await I.expect(options).toEqual(3)
})
.When('je choisi l option 1',async()=>{
    await pega.dropdownByCss('select').select('Option 1')
    // await I.click('select')
    // await Selector('select').withText('Option 1').click()
})
.Then('la liste contient un choix option 2', async(I: Controller) => {
    const options = await Selector('select > option').withText('Option 2').exists
    await console.log('element existe ? '+options)
    await I.expect(options).toBeTrue()
})


/*
* Être sur la page https://the-internet.herokuapp.com/dropdown
* Vérifier que la liste dépliable affiche 3 choix
* Choisir Option 1
* Vérifier que la liste contient un choix Option 2
*/