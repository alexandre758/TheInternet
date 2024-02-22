import { pega } from "pega-model";
import { getUrl } from "../../src/managers/test-maker.common";





export class TestScreenPage{
    public async loginViaUserPool(operator:any,runInfo:any){
        await pega.visit(getUrl(runInfo.configuration.extra.env.name), runInfo);
        await pega.loginForm.login(operator.username, operator.password)
    }
}

export const testScreen = new TestScreenPage();