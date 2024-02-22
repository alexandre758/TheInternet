import {pega} from 'pega-model';
import { Feature } from "test-maker";


Feature(`Test screen page`)
    .Scenario(`sac-1-1`)
    .Given(`I logged in as a user`, async (I) => {
        await pega.visit('https://pega870-web.tm.k-expert.com/prweb/')
        await pega.loginForm.login('test.cafe1','Rulesfeb24!'); //mdp = Rules + month + year + ! ← dépend de la date actuelle
    })
    .When(`i am creating a new case`, async (I) => {
        // Add your code here
    })
    .Then(`i can see TestScreen page`, async (I) => {
        // Add your code here
        await pega.logoff();
    });