import { pega } from "pega-model";
import { getUrl } from "../../src/managers/test-maker.common";





export class TestScreenPage {
    private readonly addInformationButton = pega.button.byText('Add Information')
    private readonly addInformationPopup = pega.elementById({ id: 'modaldialog_hd_title' })
    private readonly attachContentButton = pega.button.byText('Attach content')
    private readonly attachContentPopup = pega.elementById({ id: 'modalContent' })
    private readonly attachFileButton = pega.elementByCss(`input[title="Select file(s)"]`)
    private readonly bookField = pega.autocompletionFieldByXPath('//label[text()="Book"]/following-sibling::div/input[@type="text"]')
    private readonly addBookButton = pega.button.byText('Add')
    private readonly booksTableDiv = pega.elementByDataTestId({ dataTestId: '202004070615060476197-layout' })
    private readonly booksTable = pega.tableByTitle('Books')

    public async loginViaUserPool(operator: any, runInfo: any) {
        await pega.visit(getUrl(runInfo.configuration.extra.env.name), runInfo);
        await pega.elementById({ id: 'txtUserID' }).waitUntilElementExists();
        await pega.loginForm.login(operator.username, operator.password)
    }

    public async createTestCase() {
        await pega.leftPanelMenu.createNewCase(`TestCafe`);
        await pega.assignmentTitle.shouldHaveText('TestScreen');
    }

    public async openAddInformationPopup() {
        await this.addInformationButton.click();
    }
    public async assertAddInformationPopupVisible() {
        await this.addInformationPopup.waitUntilElementExists();
        await this.addInformationPopup.shouldBeVisible();
    }
    public async cancelPopup() {
        await pega.elementById({ id: 'ModalButtonCancel' }).click();
    }
    public async openAttachContent() {
        await this.attachContentButton.click();
    }
    public async assertAttachContentPopupVisible() {
        await this.attachContentPopup.waitUntilElementExists();
        await this.attachFileButton.shouldBeVisible();
    }
    public async addBook(filtre: string, autor: string) {
        await this.bookField.filter(filtre)
        await this.bookField.selectResultFromExternalSource('BooksList', autor)
        await this.addBookButton.click()
    }
    public async bookTabVisible(){
        await this.booksTableDiv.waitUntilElementExists();
        await this.booksTableDiv.waitUntilVisibility();
    }
    public async verifyCellReadonlyText(row: any, cell: any, expected: string) {
        await this.booksTable.row(row).cell(cell).hover()
        await this.booksTable.row(row).cell(cell).shouldHaveReadonlyText(expected)
    }
    public async tableCheckbox(row: any, cell: any) {
        await this.booksTable.row(row).cell(cell).checkbox().check();
    }
    public async uploadFile() {
        //pour upload un fichier
        // await I.setFilesToUpload(`[id="$PpyAttachmentPage$ppxAttachName"]`,  './src/files/sample.pdf');

        // await pega.textInput('20170515091207074851281').shouldHaveValue('sample');
        // await pega.buttonByTitle('Attach').click();

        // await pega.button.save().click();

        // await pega.elementByAttributes({attributeName:'title',attributeValue:'sample.pdf'}).shouldBeVisible();
    }

}

export const testScreen = new TestScreenPage();