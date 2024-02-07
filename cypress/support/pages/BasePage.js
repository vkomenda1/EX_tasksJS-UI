export default class BasePage {
    constructor() {
        this.elements = {};
        this.elements.firstBannerButton = 'button[aria-label="Close Welcome Banner"]';
        this.elements.secondBannerButton = 'a[aria-label="dismiss cookie message"]';

        this.elements.headerAccountButton = '#navbarAccount';
        this.elements.headerLoginButton = '#navbarLoginButton';

        this.elements.headerBasketButton = 'button[routerlink="/basket"]';
        this.elements.headerNumberItemsInCart = 'span.fa-layers-counter.fa-layers-top-right.fa-3x.warn-notification';

    }
    getFirstBannerButton() {
        return cy.get(this.elements.firstBannerButton);
    }
    getSecondBannerButton() {
        return cy.get(this.elements.secondBannerButton);
    }
    getHeaderAccountButton() {
        return cy.get(this.elements.headerAccountButton);
    }
    getHeaderLoginButton() {
        return cy.get(this.elements.headerLoginButton);
    }
    getHeaderBasketButton() {
        return cy.get(this.elements.headerBasketButton);
    }
    getHeaderNumberItemsInCart() {
        return cy.get(this.elements.headerNumberItemsInCart);
    }
}

