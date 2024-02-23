import { pegaApi } from "pega-model";
import { Feature, Selector } from "test-maker";

let bodyCreateDemoCase = `{
    "caseTypeID": "KE-TCF-Work-TestMaker",
    "processID": "pyStartCase",
    "content": {}
    }`;

let src = 'https://test-cafe1:Rulesfeb24!@pega870-web.tm.k-expert.com/prweb/api/v1/cases';

Feature(`demo`)
    .Scenario(`demoApi`)
    .Given(`je test les api`, async (I) => {
        // let caseId = await pegaApi.createCaseViaApi({
        //     partialUrl: 'pega870-web.tm.k-expert.com',
        //     username: '<operator>', // replace by actual value. Possible value is test.cafe1
        //     password: '<password>', // replace by actual value. Possible value is Rulesnov23!
        //     // casePrefix: 'KE-TCF-WORK',
        //     body: bodyCreateDemoCase,
        //     logInfo: "Demo Case Is Created"
        // })
        const response:Response = await I.sendPostRequest(src,bodyCreateDemoCase)
        // const getResp = await I.sendGetRequest()
    })
