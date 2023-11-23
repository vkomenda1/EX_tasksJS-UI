export function findProduct(productName) { 
    cy.get('.mat-grid-list[style]').then(body => {
      if (body.find(`div.item-name:contains('${productName}')`).length > 0) {
        body.find(`div.item-name:contains('${productName}')`)
          .parents('.mat-card') // Батьківський матеріал-картка, що містить товар
          .find('button[aria-label="Add to Basket"]') // Знаходження кнопки "Add to Basket" всередині цієї карти товару
          .click(); // Клік на знайденій кнопці
      } else {
        cy.get('button[aria-label="Next page"]').click();
        findProduct(productName);
      }
    });
  }
  

