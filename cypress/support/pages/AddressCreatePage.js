import BasePage from "./BasePage";

class addressCreatePage extends BasePage {
    constructor() {
        super();
        this.elements.countryField = '#mat-input-9';
        this.elements.nameField = '#mat-input-10';
        this.elements.mobileNumberField = '#mat-input-11';
        this.elements.zipCodeField = '#mat-input-12';
        this.elements.addressField = '#address';
        this.elements.cityField = '#mat-input-14';
        this.elements.stateField = '#mat-input-15';
        this.elements.submitButton = '#submitButton';

    }
    getCountryField() {
        return cy.get(this.elements.countryField);
    }
    getNameField() {
        return cy.get(this.elements.nameField);
    }
    getMobileNumberField() {
        return cy.get(this.elements.mobileNumberField);
    }
    getZipCodeField() {
        return cy.get(this.elements.zipCodeField);
    }
    getAddressField() {
        return cy.get(this.elements.addressField);
    }
    getCityField() {
        return cy.get(this.elements.cityField);
    }
    getStateField() {
        return cy.get(this.elements.stateField);
    }
    getSubmitButton() {
        return cy.get(this.elements.submitButton);
    }
}

export default new addressCreatePage();