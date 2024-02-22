import { Feature, Selector } from "test-maker";
import { testScreen } from '../../model/pages/testScreenPage';
import { pega } from 'pega-model';

let operator: any;

Feature(`Test Screen Page`)
    .Scenario(`SAC-1-1`)
    .Given(`I logged in as a user`, async (I, runInfo: any) => {

        operator = await runInfo.configuration.extra.operatorsManager.assignOperator('user');

        await testScreen.loginViaUserPool(operator, runInfo);
    })
    .When(`I\`m creating a new case`, async () => {
        await pega.leftPanelMenu.createNewCase(`TestCafe`);
    })
    .Then(`I can see TestScreen page`, async (I, runInfo: any) => {
        await pega.assignmentTitle.shouldHaveText('TestScreen');

        await runInfo.configuration.extra.operatorsManager.unAssignOperator('user', operator.username);
    })



    .Scenario('SAC-1-2')
    .Given('i`m on the testScreenPage', async (I, runInfo: any) => {
        operator = await runInfo.configuration.extra.operatorsManager.assignOperator('user');
        await testScreen.loginViaUserPool(operator, runInfo);
        await pega.leftPanelMenu.createNewCase(`TestCafe`);
        await pega.assignmentTitle.shouldHaveText('TestScreen');

    })
    .When('i`m clicking the "add information" button', async () => {
        await pega.button.byText('Add Information').click();
        // await pega.buttonByDataTestId('2020040704574204653718') //avec le test id
    })
    .Then('I can see Fillinfo popup', async (I, runInfo: any) => {
        // await pega.elementById({id:'modalWrapper'}).shouldBeVisible();
        await pega.elementById({ id: 'modaldialog_hd_title' }).waitUntilElementExists();
        await pega.elementById({ id: 'modaldialog_hd_title' }).shouldBeVisible();
        await pega.elementById({ id: 'ModalButtonCancel' }).click();
        await runInfo.configuration.extra.operatorsManager.unAssignOperator('user', operator.username);
    })



    .Scenario('SAC-1-3')
    .Given(' I`m on the TestScreenPage', async (I, runInfo: any) => {
        operator = await runInfo.configuration.extra.operatorsManager.assignOperator('user');
        await testScreen.loginViaUserPool(operator, runInfo);
        await pega.leftPanelMenu.createNewCase(`TestCafe`);
        await pega.assignmentTitle.shouldHaveText('TestScreen');
    })
    .When('I`m clicking the “Attach content“ button', async () => {
        await pega.button.byText('Attach content').click();
    })
    .Then('I can upload documents', async (I,runInfo:any) => {
        await pega.elementById({id:'modalContent'}).waitUntilElementExists();
        await pega.elementByCss(`input[title="Select file(s)"]`).shouldBeVisible();
        await pega.elementById({ id: 'ModalButtonCancel' }).click();

        //pour upload un fichier
        // await I.setFilesToUpload(`[id="$PpyAttachmentPage$ppxAttachName"]`,  './src/files/sample.pdf');

        // await pega.textInput('20170515091207074851281').shouldHaveValue('sample');
        // await pega.buttonByTitle('Attach').click();

        // await pega.button.save().click();

        // await pega.elementByAttributes({attributeName:'title',attributeValue:'sample.pdf'}).shouldBeVisible();


        await runInfo.configuration.extra.operatorsManager.unAssignOperator('user', operator.username);
    })




    .Scenario('SAC-1-4')
    .Given('I`m on the TestScreenPage', async (I,runInfo:any) => {
        operator = await runInfo.configuration.extra.operatorsManager.assignOperator('user');
        await testScreen.loginViaUserPool(operator, runInfo);
        await pega.leftPanelMenu.createNewCase(`TestCafe`);
        await pega.assignmentTitle.shouldHaveText('TestScreen');
    })
    .When('I`m selecting the book in the “Book“ field', async (I) => {

        await pega.autocompletionFieldByXPath('//label[text()="Book"]/following-sibling::div/input[@type="text"]').filter('hamlet')
        await pega.autocompletionFieldByXPath('//label[text()="Book"]/following-sibling::div/input[@type="text"]').selectResultFromExternalSource('BooksList','William Shakespeare')
        await pega.button.byText('Add').click();
        
    })
    .Then('I can see the information in the table below(name, author, year and is Selected checkbox).',async(I,runInfo:any)=>{
        await pega.elementByDataTestId({dataTestId:'202004070615060476197-layout'}).waitUntilElementExists();
        await pega.elementByDataTestId({dataTestId:'202004070615060476197-layout'}).waitUntilVisibility();

        await pega.tableByTitle('Books').row(1).cell(1).hover()
        await pega.tableByTitle('Books').row(1).cell(1).shouldHaveReadonlyText('William Shakespeare')
        await pega.tableByTitle('Books').row(1).cell(2).hover()
        await pega.tableByTitle('Books').row(1).cell(2).shouldHaveReadonlyText('Hamlet')
        await pega.tableByTitle('Books').row(1).cell(4).checkbox().check();
        await runInfo.configuration.extra.operatorsManager.unAssignOperator('user', operator.username);
    })