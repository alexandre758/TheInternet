import { Feature } from "test-maker";
import { common, getUsersPool, operatorsManager } from '../managers/test-maker.common';
import { testScreen } from '../../model/pages/testScreenPage';
import { pega } from 'pega-model';

let operator:any;

Feature(`Test Screen Page`)
    .Scenario(`SAC-1-1`)
    .Given(`I logged in as a user`, async (I, runInfo:any) => {

        let name = runInfo.configuration.extra.env.name;
        console.log("Current environment=" + name);

        await operatorsManager.SetOperatorsSource(getUsersPool(common.extra.env.name));

        operator = await runInfo.configuration.extra.operatorsManager.assignOperator('user');

        await testScreen.loginViaUserPool(operator, runInfo);
    })
    .When(`I\`m creating a new case`, async () => {
        await pega.leftPanelMenu.createNewCase(`TestCafe`);
    })
    .Then(`I can see TestScreen page`, async (I, runInfo:any) => {
        await pega.assignmentTitle.shouldHaveText('TestScreen');

        await runInfo.configuration.extra.operatorsManager.unAssignOperator('user', operator.username);
    })