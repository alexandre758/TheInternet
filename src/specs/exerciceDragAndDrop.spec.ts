import { Controller, Feature, Selector } from "test-maker";



Feature('exercice drag and drop')
.Scenario('scénario 1')
.Given('connexion au site', async(page: Controller) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop')
})
.When('je fais un drag&drop de B vers A', async(I) => {
    await Selector('header').withText('B').dragToSelector(Selector('header').withText('A'));
    await I.hover('h3')
})
.Then('B est avant A',async(I: Controller)=>{
    const first = await Selector('header').nth(0).innerText
    const second = await Selector('header').nth(1).innerText
    await I.expect(first).toEqual('B') 
    await I.expect(second).toEqual('A')
})


/*
* Être sur la page https://the-internet.herokuapp.com/drag_and_drop
* Glisser-déposer A dans B
* Vérifier que B est maintenant avant A
*/