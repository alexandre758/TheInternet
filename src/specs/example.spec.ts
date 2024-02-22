import { Feature, Selector, Controller } from 'test-maker';

Feature(`Example Feature`)
    .Scenario(`Example Scenario`)
    .Given(`We Visit google search page`, async (I) => {
        await I.goto(`https://google.com/`);

        // uncomment the code below if from your location google shows a popup asking for user's consent for data and cookies
        const dialogModal = Selector(`button[id="L2AGLb"]`, { timeout: 2000 });
        if (await dialogModal.exists) {
            await I.focus(dialogModal);
            await I.pressEnterKey();
        }
    })
    .When(`We Search For Query`, async (I) => {
        await I.fillField(`[name="q"]`, `knowledge expert`)
               .pressEnterKey();
    })
    .Then(`We Get result`, async (I: Controller) => {

        const firstResult = Selector(`h3`).withText(`Knowledge Expert - Digital Transformation`);

        await I.expect(firstResult.innerText).toEqual(`Knowledge Expert - Digital Transformation`);
    });
