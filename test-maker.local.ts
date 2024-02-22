import { Configuration, mergeAndConcat, reporters } from "test-maker";
import { common } from "./src/managers/test-maker.common";

const testMakerLocalConfig: Configuration = {
    runner: {
        headless: false,
        timeout: {
            selector: 10000,
            assertion: 12000
        },
        failure: { //saute le scénario ou l'étape après un echec
            feature: {
                exitProcessOnFirstFail: false,
                skipRemainingScenariosOnScenarioFail: false,
                skipRemainingStepsOnStepFail: false,
            },
        },
    },
    reporting:{
        reporters: [reporters.terminal,reporters.text]
    }
};
// export default testMakerLocalConfig;
export default mergeAndConcat(common, testMakerLocalConfig);
