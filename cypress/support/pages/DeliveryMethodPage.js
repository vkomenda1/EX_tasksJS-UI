import BasePage from "./BasePage";

class deliveryMethodPage extends BasePage {
    constructor() {
        super();
        this.elements.radioButton = '#mat-radio-42';
        this.elements.continueButton = 'mat-icon:contains(" navigate_next ")';

    }
    getRadioButton() {
        return cy.get(this.elements.radioButton);
    }
    getContinueButton() {
        return cy.get(this.elements.continueButton);
    }
}

export default new deliveryMethodPage();