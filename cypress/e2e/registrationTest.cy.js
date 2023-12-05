import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";
import registrationPage from "../support/pages/RegistrationPage";
import { faker } from "@faker-js/faker"
import user from "..//fixtures/user.json"

user.email = faker.internet.email({ provider: "fakeMail.com" });
user.password = faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/ });
user.securityAnswer = faker.lorem.words(3);

const argumentsInsert = '{insert}';
const argumentsEsc = '{esc}';



describe("Succesfull registration", () => {
  it("Registration", () => {
    homePage.visit();

    homePage.getFirstBannerButton().click();
    homePage.getSecondBannerButton().click();

    homePage.getHeaderAccountButton().click();
    homePage.getHeaderLoginButton().click();

    loginPage.getNewCustomerLink().click();

    registrationPage.getEmailField().type(user.email);
    registrationPage.getPasswordField().type(user.password);
    registrationPage.getRepeatPasswordField().type(user.password);
    registrationPage.getSecurityQuestionDropdown().click();
    registrationPage.getListbox().click();
    registrationPage.getSecurityAnswerControl().type(user.securityAnswer);
    registrationPage.getRegisterButton().click();

    loginPage.getRegistrationSuccessfullyMessage().should("contain", 'Registration completed successfully. You can now log in.');


  })

  it("Registration fields validation", () => {
    homePage.visit();

    homePage.getFirstBannerButton().click();
    homePage.getSecondBannerButton().click();

    homePage.getHeaderAccountButton().click();
    homePage.getHeaderLoginButton().click();

    loginPage.getNewCustomerLink().click();

    registrationPage.getEmailField().type(argumentsInsert);
    registrationPage.getPasswordField().type(argumentsInsert);
    registrationPage.getRepeatPasswordField().type(argumentsInsert);
    registrationPage.getSecurityQuestionDropdown().type(argumentsEsc);
    registrationPage.getSecurityAnswerControl().type(argumentsInsert, argumentsEsc);
    registrationPage.getRegisterForm().click();
    registrationPage.getSlideToggle().click();

    registrationPage.getErrorMessageEmailField().should('contain', 'Please provide an email address.');
    registrationPage.getErrorMessagePasswordField().should('contain', 'Please provide a password.');
    registrationPage.getErrorMessageRepeatPasswordField().should('contain', ' Please repeat your password. ');
    registrationPage.getErrorMessageSecurityQuestionField().should('contain', ' Please select a security question. ');
    registrationPage.getErrorMessageAnswerSecurityQuestionField().should('contain', ' Please provide an answer to your security question. ');

    registrationPage.getErrorMessageToggle().should('contain', 'contains at least one lower character');
    registrationPage.getErrorMessageToggle().should('contain', 'contains at least one upper character');
    registrationPage.getErrorMessageToggle().should('contain', 'contains at least one digit');
    registrationPage.getErrorMessageToggle().should('contain', 'contains at least one special character');
    registrationPage.getErrorMessageToggle().should('contain', 'contains at least 8 characters');
  })

})
