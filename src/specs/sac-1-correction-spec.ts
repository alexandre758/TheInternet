import { Feature } from "test-maker";
import { testScreen } from '../../model/pages/testScreenPage';
import { pega } from 'pega-model';

let operator:any;

Feature(`Test Screen Page`)
    .Scenario(`SAC-1-1`)
    .Given(`I logged in as a user`, async (I,runInfo:any) => {

        operator = await runInfo.configuration.extra.operatorsManager.assignOperator('user');

        await testScreen.loginViaUserPool(operator, runInfo);
    })
    .When(`I\`m creating a new case`, async () => {
        await pega.leftPanelMenu.createNewCase(`TestCafe`);
    })
    .Then(`I can see TestScreen page`, async (I,runInfo:any) => {
        await pega.assignmentTitle.shouldHaveText('TestScreen');

        await runInfo.configuration.extra.operatorsManager.unAssignOperator('user', operator.username);
    })



    .Scenario('SAC-1-2')
    .Given('i`m on the testScreenPage',async(I,runInfo:any)=> {
        operator = await runInfo.configuration.extra.operatorsManager.assignOperator('user');
        await testScreen.loginViaUserPool(operator,runInfo);
        await pega.leftPanelMenu.createNewCase(`TestCafe`);
        await pega.assignmentTitle.shouldHaveText('TestScreen');

    })
    .When('i`m clicking the "add information" button',async()=>{
        await pega.button.byText('Add Information').click();
        // await pega.buttonByDataTestId('2020040704574204653718') //avec le test id
    })
    .Then('I can see Fillinfo popup',async(I,runInfo:any)=> {
        // await pega.elementById({id:'modalWrapper'}).shouldBeVisible();
        await pega.elementById({id:'modaldialog_hd_title'}).waitUntilElementExists();
        await pega.elementById({id:'modaldialog_hd_title'}).shouldBeVisible();
        await pega.elementById({id:'ModalButtonCancel'}).click();
        await runInfo.configuration.extra.operatorsManager.unAssignOperator('user', operator.username);
    })