import BasePage from "./BasePage";

class PaymentShopPage extends BasePage {
    constructor() {
        super();
        this.elements.radioButton = '#mat-radio-42';
        this.elements.continueButton = 'mat-icon:contains(" navigate_next ")';

        this.elements.matExpansionPanel = '#mat-expansion-panel-header-0';
        this.elements.nameField = '#mat-input-16';
        this.elements.cardNumberField = '#mat-input-17';
        this.elements.expiryMonthSelect = '#mat-input-18';
        this.elements.expiryYaerSelect = '#mat-input-19';
        this.elements.submitButton = '#submitButton';
        this.elements.radioButton = '#mat-radio-44';
        this.elements.continueButton = 'mat-icon:contains(" navigate_next ")';

    }
    getRadioButton() {
        return cy.get(this.elements.radioButton);
    }
    getContinueButton() {
        return cy.get(this.elements.continueButton);
    }
    getMatExpansionPanel() {
        return cy.get(this.elements.matExpansionPanel);
    }

    getNameField() {
        return cy.get(this.elements.nameField);
    }

    getCardNumberField() {
        return cy.get(this.elements.cardNumberField);
    }

    getExpiryMonthSelect() {
        return cy.get(this.elements.expiryMonthSelect);
    }

    getExpiryYearSelect() {
        return cy.get(this.elements.expiryYaerSelect);
    }

    getSubmitButton() {
        return cy.get(this.elements.submitButton);
    }

    getRadioButton() {
        return cy.get(this.elements.radioButton);
    }

    getContinueButton() {
        return cy.get(this.elements.continueButton);
    }
}

export default new PaymentShopPage();