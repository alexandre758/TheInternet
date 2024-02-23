import { Controller, Feature, Selector } from "test-maker";
import { theInternetPage } from "../../model/pages/theInternetPage";

Feature('Broken-images')
.Scenario('scénario 1')
.Given('connexion au site', async(page: Controller) => {
    await page.goto('https://the-internet.herokuapp.com/broken_images')
     
})
.Then('3 images sont présentes', async (I: Controller) => {
    await I.expect((await Selector('div > img').all()).length).toEqual(3)
})
.When('je clique sur le lien de la première image',async()=>{
    await theInternetPage.gotoImgLink(0)
})
.Then('je n ai pas d erreur 404 sur la première image', async(I: Controller) => {
    await theInternetPage.imgHere()
    await I.goBackward()
})
.When('je clique sur le lien de la deuxième image',async()=>{
    await theInternetPage.gotoImgLink(1)
})
.Then('je n ai pas d erreur 404 sur la seconde image', async(I: Controller) => {
    await theInternetPage.imgHere()
    await I.goBackward()
})
.When('je clique sur le lien de la troisième image',async()=>{
    await theInternetPage.gotoImgLink(2)    
})
.Then('je n ai pas d erreur 404 sur la troisième image', async(I) => {
    await theInternetPage.imgHere()
    await I.goBackward()
})


/*
* Être sur la page https://the-internet.herokuapp.com/broken_images
* Vérifier la présence de 3 images sur la page (pas plus, pas moins)
* Vérifier que le lien de chaque image ne renvoie pas d'erreur 404
*/