import { Controller, Feature, Selector } from "test-maker";




Feature('exercice A/B testing')
.Scenario('scénario 1')
.Given('connexion au site', async(I: Controller) => {  //async(page: Controller, runInfo) ← voir l'utilité du runInfo
    await I.goto('https://the-internet.herokuapp.com/')
})
.When('je clique sur le lien "A/B Testing"', async (I) => {
    await I.click('[href="/abtest"]')
})
.Then('le titre est "A/B Test Control 1',async(I: Controller)=>{
    await I.expect(Selector('h3').innerText).toContain('A/B Test')
})
.Scenario('scénario 2')
.Given('j ouvre une seconde instance', async(J: Controller) => {
    await J.goto('https://the-internet.herokuapp.com/')
})
.When('je clique sur abTesting', async(J: Controller) => {
    await J.click('[href="/abtest"]')
})
.Then('le titre est "A/B Test Control 2',async(J: Controller)=>{
    await J.expect(Selector('h3').innerText).toContain('A/B Test') 
})


/*
* Se connecter sur https://the-internet.herokuapp.com/ avec l'instance A
* Cliquer sur le lien A/B Testing
* Vérifier que le premier titre est A/B Test Variation 1

* Se connecter sur https://the-internet.herokuapp.com/ avec l'instance B
* Cliquer sur le lien A/B Testing
* Vérifier que le titre n'est plus A/B Test Variation 1
*/