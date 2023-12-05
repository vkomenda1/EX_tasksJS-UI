import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";
import searchPage from "../support/pages/SearchPage";
import registrationPage from "../support/pages/RegistrationPage";
import basketPage from "../support/pages/BasketPage";
import addressSelectPage from "../support/pages/addressSelectPage";
import addressCreatePage from "../support/pages/addressCreatePage";
import deliveryMethodPage from "../support/pages/deliveryMethodPage";
import paymentShopPage from "../support/pages/paymentShopPage";
import orderSummaryPage from "../support/pages/OrderSummaryPage";
import { faker } from "@faker-js/faker"
import user from "..//fixtures/user.json"
import { findProduct } from "../support/helpers/findProductHelper"
import addressData from "..//fixtures/addressData.json"

beforeEach("Each test has its own fake data", () => {
    user.email = faker.internet.email({ provider: "fakeMail.com" });
    user.password = faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/ });
    user.securityAnswer = faker.lorem.words(3);

    addressData.addressCreatePage.country = faker.location.country();
    addressData.addressCreatePage.name = faker.person.firstName();
    addressData.addressCreatePage.mobileNumber = faker.string.numeric(10);
    addressData.addressCreatePage.zipCode = faker.location.zipCode('####');
    addressData.addressCreatePage.address = faker.location.street();
    addressData.addressCreatePage.city = faker.location.city();
    addressData.addressCreatePage.state = faker.location.state();

    addressData.paymentShopPage.cardNumber = faker.finance.creditCardNumber('63[7-9]############L');
});

describe("Succesfull Authorization", () => {
    beforeEach("Fill in registration fields...", () => {
        homePage.visit();

        homePage.getFirstBannerButton().click();
        homePage.getSecondBannerButton().click();

        homePage.getHeaderAccountButton().click();
        homePage.getHeaderLoginButton().click();

        loginPage.getNewCustomerLink().click();

        registrationPage.fillRegistrationFields(user);
        loginPage.fillAuthorizationFields(user);
    });

    it("Order placement", () => {

        searchPage.getAddBasketButton().eq(2).click();

        cy.log("Checking one item in the cart");
        searchPage.getHeaderNumberItemsInCart().should('contain', '1', { timeout: 20000 });

        searchPage.getHeaderBasketButton().click();

        basketPage.getCheckoutButton().click();
        addressSelectPage.getAddressCreateButton().click();

        addressCreatePage.getCountryField().type(addressData.addressCreatePage.country);
        addressCreatePage.getNameField().type(addressData.addressCreatePage.name);
        addressCreatePage.getMobileNumberField().type(addressData.addressCreatePage.mobileNumber);
        addressCreatePage.getZipCodeField().type(addressData.addressCreatePage.zipCode);
        addressCreatePage.getAddressField().type(addressData.addressCreatePage.address);
        addressCreatePage.getCityField().type(addressData.addressCreatePage.city);
        addressCreatePage.getStateField().type(addressData.addressCreatePage.state);
        addressCreatePage.getSubmitButton().click();

        addressSelectPage.getRadioButton().click();
        addressSelectPage.getContinueButton().click();

        deliveryMethodPage.getRadioButton().click();
        deliveryMethodPage.getContinueButton().click();

        paymentShopPage.getMatExpansionPanel().click();
        paymentShopPage.getNameField().type(addressData.addressCreatePage.name);
        paymentShopPage.getCardNumberField().type(addressData.paymentShopPage.cardNumber);
        paymentShopPage.getExpiryMonthSelect().select(addressData.paymentShopPage.expiryMonth);
        paymentShopPage.getExpiryYearSelect().select(addressData.paymentShopPage.expiryYear);
        paymentShopPage.getSubmitButton().click();
        paymentShopPage.getRadioButton().click();
        paymentShopPage.getContinueButton().click();

        orderSummaryPage.getPayButton().click();

        cy.log("Title of the purchase card display");
        orderSummaryPage.getTitlePurchaseCardDisplay().should("contain", 'Thank you for your purchase!');

    })

    it("Order placement with helper", () => {

        findProduct(' Carrot Juice (1000ml) ');
        cy.log("Checking one item in the cart");
        searchPage.getHeaderNumberItemsInCart().should('contain', '1', { timeout: 20000 });

        searchPage.getHeaderBasketButton().click();
        basketPage.getCheckoutButton().click();

        addressSelectPage.getAddressCreateButton().click();

        addressCreatePage.getCountryField().type(addressData.addressCreatePage.country);
        addressCreatePage.getNameField().type(addressData.addressCreatePage.name);
        addressCreatePage.getMobileNumberField().type(addressData.addressCreatePage.mobileNumber);
        addressCreatePage.getZipCodeField().type(addressData.addressCreatePage.zipCode);
        addressCreatePage.getAddressField().type(addressData.addressCreatePage.address);
        addressCreatePage.getCityField().type(addressData.addressCreatePage.city);
        addressCreatePage.getStateField().type(addressData.addressCreatePage.state);
        addressCreatePage.getSubmitButton().click();

        addressSelectPage.getRadioButton().click();
        addressSelectPage.getContinueButton().click();

        deliveryMethodPage.getRadioButton().click();
        deliveryMethodPage.getContinueButton().click();

        paymentShopPage.getMatExpansionPanel().click();
        paymentShopPage.getNameField().type(addressData.addressCreatePage.name);
        paymentShopPage.getCardNumberField().type(addressData.paymentShopPage.cardNumber);
        paymentShopPage.getExpiryMonthSelect().select(addressData.paymentShopPage.expiryMonth);
        paymentShopPage.getExpiryYearSelect().select(addressData.paymentShopPage.expiryYear);
        paymentShopPage.getSubmitButton().click();
        paymentShopPage.getRadioButton().click();
        paymentShopPage.getContinueButton().click();

        orderSummaryPage.getPayButton().click();

        cy.log("Title of the purchase card display");
        orderSummaryPage.getTitlePurchaseCardDisplay().should("contain", 'Thank you for your purchase!');
    })
})
