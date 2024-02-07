import BasePage from "./BasePage";

class SearchPage extends BasePage {
    constructor() {
        super();
        this.elements.addBasketButton = 'button[aria-label="Add to Basket"]';

    }
    visit() {
        cy.log('Open website search page');
        cy.visit('/#/search');
    }

    getAddBasketButton() {
        return cy.get(this.elements.addBasketButton);
    }
}

export default new SearchPage();