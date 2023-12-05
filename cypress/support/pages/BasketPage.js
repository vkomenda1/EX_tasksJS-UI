import BasePage from "./BasePage";

class BasketPage extends BasePage {
    constructor() {
        super();
        this.elements.checkoutButton = '#checkoutButton';

    }
    getCheckoutButton() {
        return cy.get(this.elements.checkoutButton);
    }
}

export default new BasketPage();