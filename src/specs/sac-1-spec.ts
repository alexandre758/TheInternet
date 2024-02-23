import { Feature, Selector } from "test-maker";
import { testScreen } from '../../model/pages/testScreenPage';
import {Data} from '../datas/data'
import { pega } from 'pega-model';

let operator: any;

Feature(`Test-Screen-Page`)
    .beforeEachScenario(async (_I, runInfo:any) => {
        operator = await runInfo.configuration.extra.operatorsManager.assignOperator('user');
    })
    .afterEachScenario(async(_I,runInfo:any)=>{
        await runInfo.configuration.extra.operatorsManager.unAssignOperator('user', operator.username);
        if(await Selector('.icons.avatar',{timeout:2000}).exists){
            await pega.logoff();
        }
    })
    .Scenario(`SAC-1-1`)
    .Given(`I logged in as a user`, async (_I, runInfo: any) => {
        await testScreen.loginViaUserPool(operator, runInfo);
    })
    .When(`I\`m creating a new case`, async () => {
        await pega.leftPanelMenu.createNewCase(`TestCafe`);
    })
    .Then(`I can see TestScreen page`, async () => {
        await pega.assignmentTitle.shouldHaveText('TestScreen');
    })



    .Scenario('SAC-1-2')
    .Given('i`m on the testScreenPage', async (_I, runInfo: any) => {
        await testScreen.loginViaUserPool(operator, runInfo);
        await testScreen.createTestCase();
    })
    .When('i`m clicking the "add information" button', async () => {
        await testScreen.openAddInformationPopup();
    })
    .Then('I can see Fillinfo popup', async () => {
        // await pega.elementById({id:'modalWrapper'}).shouldBeVisible();
        await testScreen.assertAddInformationPopupVisible();
        await testScreen.cancelPopup()

    })



    .Scenario('SAC-1-3')
    .Given(' I`m on the TestScreenPage', async (_I, runInfo: any) => {
        await testScreen.loginViaUserPool(operator, runInfo);
        await testScreen.createTestCase();
    })
    .When('I`m clicking the “Attach content“ button', async () => {
        await testScreen.openAttachContent();
    })
    .Then('I can upload documents', async () => {
        await testScreen.assertAttachContentPopupVisible();
        await testScreen.cancelPopup();
        await testScreen.uploadFile();

    })

    .Scenario('SAC-1-4')
    .Given('I`m on the TestScreenPage', async (_I, runInfo: any) => {
        await testScreen.loginViaUserPool(operator, runInfo);
        await testScreen.createTestCase();

    })
    .When('I`m selecting the book in the “Book“ field', async () => {
        await testScreen.addBook(Data.book.Hamlet.title!, Data.book.Hamlet.author!)
    })
    .Then('I can see the information in the table below(name, author, year and is Selected checkbox).', async () => {
        await testScreen.bookTabVisible();
        await testScreen.verifyCellReadonlyText(1, 1, Data.book.Hamlet.author!)
        await testScreen.verifyCellReadonlyText(1, 2, Data.book.Hamlet.title!)
        await testScreen.tableCheckbox(1, 4)
    })