import BasePage from "./BasePage";

class FeedbackForms extends BasePage {
    constructor() {
        super();
        this.elements.authorField = '#mat-input-1';
        this.elements.commentField = '#comment';
        this.elements.ratingField = '#rating';

        this.elements.submitButton = '#submitButton';
        this.elements.messageSuccessful = '.mat-simple-snack-bar-content';

    }
    visit() {
        cy.log('Opening Feedback Forms page...');
        cy.visit('/#/contact');
    }

    getAuthorField() {
        return cy.get(this.elements.authorField);
    }
    getCommentField() {
        return cy.get(this.elements.commentField);
    }
    getRationField() {
        return cy.get(this.elements.ratingField);
    }
    getSubmitButton() {
        return cy.get(this.elements.submitButton);
    }
    getMessageSuccessful() {
        return cy.get(this.elements.messageSuccessful);
    }

    captchaValue() {
        let captchaValue;

        cy.get('#captcha')
            .invoke('text')
            .then((text) => {
                captchaValue = text.trim();

                let captchaExpression = captchaValue;
                let result = eval(captchaExpression);
                console.log(result);

                cy.get('#captchaControl').type(result);
            });
    }

}

export default new FeedbackForms();





