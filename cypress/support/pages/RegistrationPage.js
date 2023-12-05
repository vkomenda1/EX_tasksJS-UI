import BasePage from "./BasePage";

class RegistrationPage extends BasePage {
    constructor() {
        super();
        this.elements.emailField = '#emailControl';
        this.elements.passwordField = '#passwordControl';
        this.elements.repeatPasswordField = '#repeatPasswordControl';
        this.elements.securityQuestionDropdown = 'mat-select[name="securityQuestion"]';
        this.elements.listbox = '#mat-option-13';
        this.elements.securityAnswerControl = '#securityAnswerControl';
        this.elements.registerButton = '#registerButton';
        this.elements.registerForm = '#registration-form';
        this.elements.slideToggle = '#mat-slide-toggle-1';

        this.elements.errorMessageEmailField = '#mat-error-2';
        this.elements.errorMessagePasswordField = '#mat-error-3';
        this.elements.errorMessageRepeatPasswordField = '#mat-error-4';
        this.elements.errorMessageSecurityQuestionField = '#mat-error-5';
        this.elements.errorMessageAnswerSecurityQuestionField = '#mat-error-6';

        this.elements.errorMessageToggle = 'span[class="ng-tns-c128-19"]';


    }
    visit() {
        cy.log("Open website register page");
        cy.visit('//#/register');
    }

    getEmailField() {
        return cy.get(this.elements.emailField);
    }
    getPasswordField() {
        return cy.get(this.elements.passwordField);
    }
    getRepeatPasswordField() {
        return cy.get(this.elements.repeatPasswordField);
    }
    getSecurityQuestionDropdown() {
        return cy.get(this.elements.securityQuestionDropdown);
    }
    getListbox() {
        return cy.get(this.elements.listbox);
    }
    getSecurityAnswerControl() {
        return cy.get(this.elements.securityAnswerControl);
    }
    getRegisterButton() {
        return cy.get(this.elements.registerButton);
    }
    getRegisterForm() {
        return cy.get(this.elements.registerForm);
    }
    getSlideToggle() {
        return cy.get(this.elements.slideToggle);
    }


    getErrorMessageEmailField() {
        return cy.get(this.elements.errorMessageEmailField);
    }

    getErrorMessagePasswordField() {
        return cy.get(this.elements.errorMessagePasswordField);
    }

    getErrorMessageRepeatPasswordField() {
        return cy.get(this.elements.errorMessageRepeatPasswordField);
    }

    getErrorMessageSecurityQuestionField() {
        return cy.get(this.elements.errorMessageSecurityQuestionField);
    }

    getErrorMessageAnswerSecurityQuestionField() {
        return cy.get(this.elements.errorMessageAnswerSecurityQuestionField);
    }
    getErrorMessageToggle() {
        return cy.get(this.elements.errorMessageToggle);
    }

    fillRegistrationFields(user) {
        cy.log("Fill in registration fields...");

        this.getEmailField().type(user.email);
        this.getPasswordField().type(user.password);
        this.getRepeatPasswordField().type(user.password);
        this.getSecurityQuestionDropdown().click();
        this.getListbox().click();
        this.getSecurityAnswerControl().type(user.securityAnswer);
        this.getRegisterButton().click();
    }
}
export default new RegistrationPage();
