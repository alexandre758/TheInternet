import { Configuration, reporters } from "test-maker";

const testMakerCIConfig: Configuration = {
    runner: {
        headless: true,
        timeout:{
            selector:10000,
            assertion:12000
        }
    },
    reporting: {
        reporters: [reporters.terminal, reporters.allure],
        screenshots: {
            enabled: true
        }
    },
};
export default testMakerCIConfig;
