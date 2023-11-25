import BasePage from "./BasePage";

class orderSummaryPage extends BasePage {
    constructor() {
        super();
        this.elements.payButton = 'mat-icon:contains("monetization_on ")';
        this.elements.titlePurchaseCardDisplay = 'h1';

    }
    getPayButton() {
        return cy.get(this.elements.payButton);
    }
    getTitlePurchaseCardDisplay() {
        return cy.get(this.elements.titlePurchaseCardDisplay);
    }
}
export default new orderSummaryPage();