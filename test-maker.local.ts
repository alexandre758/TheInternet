import { Configuration, TerminalReporterOptions, reporters } from "test-maker";

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
        reporters: [reporters.terminal,
            {
            name:`text`,
            options:<TerminalReporterOptions>{
                ignoreLogLevel:true,
                hook:{
                    start:false,
                    done:true,
                }
            }
        }]
    }
};
export default testMakerLocalConfig;
