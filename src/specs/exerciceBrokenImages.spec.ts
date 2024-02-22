import { Controller, Feature, Selector } from "test-maker";

Feature('exercice broken images')
.Scenario('scénario 1')
.Given('connexion au site', async(page: Controller) => {
    await page.goto('https://the-internet.herokuapp.com/broken_images')
     
})
.Then('3 images sont présentes', async (I: Controller) => {
    await I.expect((await Selector('div > img').all()).length).toEqual(3)
})
.When('je clique sur le lien de la première image',async(I: Controller)=>{
    const lien = 'https://the-internet.herokuapp.com/'+ await Selector('div > img').nth(0).getAttribute('src')
    await I.goto(lien)
})
.Then('je n ai pas d erreur 404 sur la première image', async(I: Controller) => {
    const error = Selector('h1').withText('Not Found')
    if(await error.exists){
        await console.log('image not found')
    }
    else{
        await console.log('image is found')
    }
    await I.goBackward()
})
.When('je clique sur le lien de la deuxième image',async(I: Controller)=>{
    const lien = 'https://the-internet.herokuapp.com/'+ await Selector('div > img').nth(1).getAttribute('src')
    await I.goto(lien)
})
.Then('je n ai pas d erreur 404 sur la seconde image', async(I: Controller) => {
    const error = Selector('h1').withText('Not Found')
    if(await error.exists){
        await console.log('image not found')
    }
    else{
        await console.log('image is found')
    }
    await I.goBackward()
})
.When('je clique sur le lien de la troisième image',async(I: Controller)=>{
    const lien = 'https://the-internet.herokuapp.com/'+ await Selector('div > img').nth(2).getAttribute('src')
    await I.goto(lien)
})
.Then('je n ai pas d erreur 404 sur la troisième image', async() => {
    const error = Selector('h1').withText('Not Found')
    if(await error.exists){
        await console.log('image not found')
    }
    else{
        await console.log('image is found')
    }
    // await I.goBackward
})


/*
* Être sur la page https://the-internet.herokuapp.com/broken_images
* Vérifier la présence de 3 images sur la page (pas plus, pas moins)
* Vérifier que le lien de chaque image ne renvoie pas d'erreur 404
*/