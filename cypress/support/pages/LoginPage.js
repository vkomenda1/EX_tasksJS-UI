import BasePage from "./BasePage";

class LoginPage extends BasePage {
    constructor() {
        super();
        this.elements.newCustomerLink = 'a[href="#/register"]';
        this.elements.registrationSuccessfullyMessage = '.mat-simple-snack-bar-content';
        this.elements.emailField = '#email';
        this.elements.passwordField = '#password';
        this.elements.loginButton = '#loginButton';

    }
    visit() {
        cy.log('Open website login page');
        cy.visit('//#/login');
    }

    getNewCustomerLink() {
        return cy.get(this.elements.newCustomerLink);
    }
    getRegistrationSuccessfullyMessage() {
        return cy.get(this.elements.registrationSuccessfullyMessage);
    }
    getEmailField() {
        return cy.get(this.elements.emailField);
    }
    getPasswordField() {
        return cy.get(this.elements.passwordField);
    }
    getLoginButton() {
        return cy.get(this.elements.loginButton);
    }


    fillAuthorizationFields(user) {
        cy.log("Fill in Authorization fields...");

        this.getEmailField().type(user.email);
        this.getPasswordField().type(user.password);
        this.getLoginButton().click();
    }
}

export default new LoginPage();