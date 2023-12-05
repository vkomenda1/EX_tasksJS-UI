export function findProduct(productName) {
    cy.get('.mat-grid-list[style]').then(body => {
      const productElement = body.find(`div.item-name:contains('${productName}')`);
      if (productElement.length > 0) {
        cy.wrap(productElement)
          .parents('.mat-card')
          .find('button[aria-label="Add to Basket"]')
          .should('be.visible')
          .click()
      } else {
        cy.get('button[aria-label="Next page"]').click();
        resolve('Next page button clicked');
      }
    })
  }