export function authorizationErrorsMessage(testCases, loginPage, homePage) {
    homePage.visit();
    loginPage.visit();

    testCases.forEach((testCase) => {
        testCase.emailFields.forEach((emailField, i) => {
            loginPage.getEmailField().type(emailField);
            if (i < testCase.emailFields.length - 1) {
                loginPage.getPasswordField().type(testCase.passwordFields[i]);
            }
        });

        cy.get(`#mat-error-0`).should('contain', testCase.emailError);
        cy.get(`#mat-error-1`).should('contain', testCase.passwordError);
    });
}
