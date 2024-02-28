import { Feature, Selector } from "test-maker";
import { theInternetPage } from "../../model/pages/theInternetPage";


Feature('Methode-argument')
.Scenario('je me connecte avec les bons user/mdp')
.Given('je suis sur la page login', async(I)=>{
    await I.goto('https://the-internet.herokuapp.com/login')
})
.When('je rentre mon login et mdp', async() =>{
    await theInternetPage.login('tomsmith','SuperSecretPassword!')
})
.Then('le bouton logout s`affiche',async(I) =>{
    await I.expect(Selector('//i[text()=" Logout"]').visible).toBeTrue()
})
.Scenario('je me connecte avec les mauvais user/mdp')
.Given('je suis sur la page login', async(I)=>{
    await I.goto('https://the-internet.herokuapp.com/login')
})
.When('je rentre mon login et mdp', async() =>{
    await theInternetPage.login('tomsmith','MauvaisMotDePasse!')
})
.Then('le bouton logout s`affiche',async(I) =>{
    await I.expect(Selector('div.error').visible).toBeTrue()
})





/*
En utilisant comme référence la page https://the-internet.herokuapp.com/login
Créer une méthode utilisable avec deux arguments (le login et le mot de passe)
Utiliser cette méthode dans deux cas de test suivants:
CDT1
* Etre sur la page https://the-internet.herokuapp.com/login
* Entrer le login tomsmith
* Entrer le mot de passe SuperSecretPassword!
* Vérifier que le bouton Logout s'affiche
CDT2
* Etre sur la page https://the-internet.herokuapp.com/login
* Entrer le login tomsmith
* Entrer le mot de passe MauvaisMotDePasse!
* Vérifier que le message Your password is invalid! s'affiche
*/