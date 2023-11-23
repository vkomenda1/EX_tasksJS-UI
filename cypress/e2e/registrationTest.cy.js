import {findProduct} from '../support/findProductHelper';

describe("Succesfull registration", () => {
  it("Registration", () => {
    cy.visit("/");
    cy.get('button[aria-label="Close Welcome Banner"]').click();
    cy.get('a[aria-label="dismiss cookie message"]').click();
    cy.get('#navbarAccount').click();
    cy.get('#navbarLoginButton').click();

    cy.get('a[href="#/register"]').click();
    cy.get('#emailControl').type('exampel@test1.com');
    cy.get('#passwordControl').type('passwordControl123$');
    cy.get('#repeatPasswordControl').type('passwordControl123$');
    cy.get('mat-select[name="securityQuestion"]').click();
    cy.get('#mat-option-13').click();
    cy.get('#securityAnswerControl').type('securityAnswerControl');
    cy.get('#registerButton').click();

    cy.get('h1').should("contain", 'Login');
  })

  it("Registration fields validation", () => {
    cy.visit("/");
      cy.get('button[aria-label="Close Welcome Banner"]').click();
      cy.get('a[aria-label="dismiss cookie message"]').click();
      cy.get('#navbarAccount').click();
      cy.get('#navbarLoginButton').click();
      
      cy.get('a[href="#/register"]').click();
      cy.get('#emailControl').type('{insert}');
      cy.get('#passwordControl').type('{insert}');
      cy.get('#repeatPasswordControl').type('{insert}');
      cy.get('mat-select[name="securityQuestion"]').type('{esc}'); 
      //cy.get('#mat-option-13').click();
      cy.get('#securityAnswerControl').type('{insert}{esc}');
      cy.get('#registration-form').click();
      cy.get('#mat-slide-toggle-1').click();
      
      
      cy.get('#mat-error-2').should('contain','Please provide an email address.');
      cy.get('#mat-error-3').should('contain','Please provide a password.');
      cy.get('#mat-error-4').should('contain',' Please repeat your password. ');
      cy.get('#mat-error-5').should('contain',' Please select a security question. ');
      cy.get('#mat-error-6').should('contain',' Please provide an answer to your security question. ');

      
      
      cy.get('mat-password-strength-info[class="ng-tns-c128-19 ng-star-inserted"]').should('contain','contains at least one lower character');
      cy.get('mat-password-strength-info[class="ng-tns-c128-19 ng-star-inserted"]').should('contain','contains at least one upper character');
      cy.get('mat-password-strength-info[class="ng-tns-c128-19 ng-star-inserted"]').should('contain','contains at least one digit');
      cy.get('mat-password-strength-info[class="ng-tns-c128-19 ng-star-inserted"]').should('contain','contains at least one special character');
      cy.get('mat-password-strength-info[class="ng-tns-c128-19 ng-star-inserted"]').should('contain','contains at least 8 characters');
  })

    it("Authorization", () => {
      cy.visit("https://juice-shop-sanitarskyi.herokuapp.com/#/login");
      cy.get('button[aria-label="Close Welcome Banner"]').click();
      cy.get('a[aria-label="dismiss cookie message"]').click();
      cy.get("#email").type('exampel@test2.com');
      cy.get("#password").type('passwordControl123$');
      cy.get("#loginButton").click();

      cy.get('button[routerlink="/basket"]').should("contain", ' Your Basket');
      
    })

  it("Authorization fields validation", () => {
    cy.visit("https://juice-shop-sanitarskyi.herokuapp.com/#/login");
      cy.get('button[aria-label="Close Welcome Banner"]').click();
      cy.get('a[aria-label="dismiss cookie message"]').click();
      cy.get("#email").type('{insert}')
      cy.get("#password").type('{insert}');
      cy.get('#login-form').click();
      
      cy.get('#mat-error-0').should('contain','Please provide an email address.');
      cy.get('#mat-error-1').should('contain','Please provide a password.');
  })

  it("Order placement", () => {
    cy.visit("https://juice-shop-sanitarskyi.herokuapp.com/#/login");
      cy.get('button[aria-label="Close Welcome Banner"]').click();
      cy.get('a[aria-label="dismiss cookie message"]').click();
      cy.get("#email").type('exampel@test1.com');
      cy.get("#password").type('passwordControl123$');
      cy.get("#loginButton").click();


    cy.get('button[aria-label="Add to Basket"]').eq(10).click();
    cy.get('button[routerlink="/basket"]').click();
    cy.get('#checkoutButton').click();
    cy.get('button[routerlink="/address/create"]').click();

    cy.get('#mat-input-3').type('Ukraine');
    cy.get('#mat-input-4').type('nameTest');
    cy.get('#mat-input-5').type('0980010000');
    cy.get('#mat-input-6').type('00001');
    cy.get('#address').type('kh1');
    cy.get('#mat-input-8').type('Kyiv');
    cy.get('#mat-input-9').type('State');
    cy.get('#submitButton').click();

    cy.get('#mat-radio-40').click();
    cy.get('mat-icon:contains(" navigate_next ")').click();
    cy.get('#mat-radio-42').click();
    cy.get('mat-icon:contains(" navigate_next ")').click();

    cy.get('#mat-expansion-panel-header-0').click();
    cy.get('#mat-input-10').type('Jonson');
    cy.get('#mat-input-11').type('1234567890123456');
    cy.get('#mat-input-12').select('10');
    cy.get('#mat-input-13').select('2090');
    cy.get('#submitButton').click();
    cy.get('#mat-radio-44').click();
    cy.get('mat-icon:contains(" navigate_next ")').click();
    cy.get('mat-icon:contains("monetization_on ")').click();

    cy.get('h1').should("contain", 'Thank you for your purchase!');
  
  })
  
  let productName = ' Melon Bike (Comeback-Product 2018 Edition) ';
  
  it("Order placement with helper", () => {
    cy.visit("https://juice-shop-sanitarskyi.herokuapp.com/#/login");
      cy.get('button[aria-label="Close Welcome Banner"]').click();
      cy.get('a[aria-label="dismiss cookie message"]').click();
      cy.get("#email").type('exampel@test1.com');
      cy.get("#password").type('passwordControl123$');
      cy.get("#loginButton").click();

    findProduct(' Melon Bike (Comeback-Product 2018 Edition) ');
    //cy.get('button[aria-label="Add to Basket"]').eq(10).click();
    
    cy.get('button[routerlink="/basket"]').click();
    cy.get('#checkoutButton').click();
    cy.get('button[routerlink="/address/create"]').click();

    cy.get('#mat-input-3').type('Ukraine');
    cy.get('#mat-input-4').type('nameTest');
    cy.get('#mat-input-5').type('0980010000');
    cy.get('#mat-input-6').type('00001');
    cy.get('#address').type('kh1');
    cy.get('#mat-input-8').type('Kyiv');
    cy.get('#mat-input-9').type('State');
    cy.get('#submitButton').click();

    cy.get('#mat-radio-40').click();
    cy.get('mat-icon:contains(" navigate_next ")').click();
    cy.get('#mat-radio-42').click();
    cy.get('mat-icon:contains(" navigate_next ")').click();

    cy.get('#mat-expansion-panel-header-0').click();
    cy.get('#mat-input-10').type('Jonson');
    cy.get('#mat-input-11').type('1234567890123456');
    cy.get('#mat-input-12').select('10');
    cy.get('#mat-input-13').select('2090');
    cy.get('#submitButton').click();
    cy.get('#mat-radio-44').click();
    cy.get('mat-icon:contains(" navigate_next ")').click();
    cy.get('mat-icon:contains("monetization_on ")').click();

    cy.get('h1').should("contain", 'Thank you for your purchase!');
  
  })
  it.only("Feedback forms", () => {
    cy.visit("/#/contact");
    cy.get('button[aria-label="Close Welcome Banner"]').click();
      cy.get('a[aria-label="dismiss cookie message"]').click();

      cy.get('#mat-input-1').invoke('removeAttr', 'disabled').clear().type('exampel@test1.com');
      cy.get('#comment').type('test test test test test test');
      cy.get('#rating').click('bottomRight')
      
      let captchaValue;

      cy.get('#captcha')
        .invoke('text')
        .then((text) => {
          captchaValue = text.trim();
      
          let captchaExpression = captchaValue;
          let result = eval(captchaExpression);
          console.log(result);

          cy.get('#captchaControl').type(result);
        });
      
        cy.get('#submitButton').click();


        cy.get('.mat-simple-snack-bar-content').should("contain", 'Thank you so much for your amazing 5-star feedback!');
        

  


    
    })
      
      
      
      

      //valueChange selectstart touchstart
      // cy.get("#email").type('{insert}')
      // cy.get("#password").type('{insert}');
      // cy.get('#login-form').click();
      
      // cy.get('#mat-error-0').should('contain','Please provide an email address.');
      // cy.get('#mat-error-1').should('contain','Please provide a password.');
  })


    
    

  
    
    
    
    
    //cy.get(('mat-select-2-panel', { force: true })).select('#mat-option-10"', { force: true });



    // cy.get(('mat-select-2-panel', { force: true }));
    // console.log('rrrrrrr:', cy.get(('mat-select-2-panel', { force: true })));
   // console.log('rrrrrrr:', cy.get(('mat-select-2-panel', { force: true })));
    //cy.select('mat-select-2-panel').select('#mat-option-10"');
    
    
    //cy.get('#mat-option-10"');

    //cy.get('mat-form-field-infix ng-tns-c119-10').click();

    //cy.get['div[class="mat-select-arrow-wrapper ng-tns-c130-11"]'].click();

    //cy.get['mat-select[name="securityQuestion"]'].click();

    
    
   //cy.get('#mat-select-0-panel').select('#mat-option-10"')

    

    //cy.get('class="#mat-option-10"')



    
    


