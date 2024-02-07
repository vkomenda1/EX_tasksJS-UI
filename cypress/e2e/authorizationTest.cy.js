import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";
import registrationPage from "../support/pages/RegistrationPage";
import { faker } from "@faker-js/faker"
import user from "..//fixtures/user.json"
import { authorizationErrorsMessage } from "../support/helpers/authHelper"
import data from "..//fixtures/data.json"

user.email = faker.internet.email({ provider: "fakeMail.com" });
user.password = faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/ });
user.securityAnswer = faker.lorem.words(3);


describe("Succesfull Authorization", () => {
    beforeEach("Fill in registration fields...", () => {
        homePage.visit();

        homePage.getFirstBannerButton().click();
        homePage.getSecondBannerButton().click();

        homePage.getHeaderAccountButton().click();
        homePage.getHeaderLoginButton().click();

        loginPage.getNewCustomerLink().click();

        registrationPage.fillRegistrationFields(user);
    });

    it("Authorization", () => {
        homePage.visit();
        loginPage.visit();

        loginPage.getEmailField().type(user.email);
        loginPage.getPasswordField().type(user.password);
        loginPage.getLoginButton().click();

        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/search')
        cy.url().should('eq', 'https://juice-shop-sanitarskyi.herokuapp.com/#/search')
    })

    it("Authorization fields validation combined", () => {
        authorizationErrorsMessage(data.testCases, loginPage, homePage);
    });
});







