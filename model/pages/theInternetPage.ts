import { I, Selector } from "test-maker";



export class TheInternetPage {
    public async gotoImgLink(numImg: any) {
        const lien = 'https://the-internet.herokuapp.com/' + await Selector('div > img').nth(numImg).getAttribute('src')
        await I.goto(lien)
    }
    public async imgHere(){
        let error
        let image
        try {
            error = await Selector('//h1',{timeout:100,retries:5,interval:20}).exists
        } catch (error) {
            error = false;
        }
    
        try {
            image = await Selector('//img',{timeout:100,retries:5,interval:20}).exists
        } catch (error) {
            image = false;
        }
        if(error){
            await console.log('image not found')
        }
        else if(image){
            await console.log('image is found')
        }
    }
    public async login(username:string,pwd:string){
        await Selector('#username').fillField(username)
        await Selector('#password').fillField(pwd)
        await Selector('//button').click()
    }
}


export const theInternetPage = new TheInternetPage()