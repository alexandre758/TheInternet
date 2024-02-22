import { Configuration, reporters } from "test-maker";

const testMakerCommonConfig: Configuration = {
    extra: {
        externalServiceToken: `33944-35955-3234666`
    },
    reporting: {
        reporters: [reporters.text]
    },
    runner: {
        adapters: [
            {
                name: 'playwright',
                options: {
                    default: true,
                    files: ["./src/specs/**/*-spec.ts"],
                    clients: ['chrome','firefox']
                }
            }
        ],
        failure: { //saute le scénario ou l'étape après un echec
            feature: {
                exitProcessOnFirstFail: false,
                skipRemainingScenariosOnScenarioFail: false,
                skipRemainingStepsOnStepFail: false,
            },
        },
    },
    suites:{
        "Long running tests":{
            path:['./src/specs/long-ones/**'] //pas de suite existante pour le moment
        },
        "chrome only":{
            path:['./src/specs/**'],
            clients:['chrome']
        }
    }
};

export default testMakerCommonConfig;