import BasePage from "./BasePage";

class addressSelectPage extends BasePage {
    constructor() {
        super();
         this.elements.addressCreateButton = 'button[routerlink="/address/create"]';

         this.elements.radioButton = '#mat-radio-40';
         this.elements.continueButton = 'mat-icon:contains(" navigate_next ")';

    }
    getAddressCreateButton() {
        return cy.get(this.elements.addressCreateButton);
    }
    getRadioButton() {
        return cy.get(this.elements.radioButton);
    }
    getContinueButton() {
        return cy.get(this.elements.continueButton);
    }
}

export default new addressSelectPage();